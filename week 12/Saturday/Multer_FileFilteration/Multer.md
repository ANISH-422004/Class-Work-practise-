# Multer: File Upload Middleware for Node.js

Multer is a middleware for handling `multipart/form-data`, which is primarily used for uploading files in **Node.js** applications. It is built on top of `busboy` and integrates seamlessly with **Express**.

## 📌 Why Use Multer?
- Efficient file uploads in **Express.js** applications.
- Supports **single** and **multiple** file uploads.
- Allows **disk storage** or **memory storage**.
- Provides **file validation** (e.g., type and size restrictions).
- Can be integrated with cloud storage services (AWS S3, Cloudinary, Firebase, etc.).

---

## 🚀 Installing Multer
To get started, install `multer` using npm:
```sh
npm install multer
```

You will also need **Express** if it's not already installed:
```sh
npm install express
```

---

## 📌 Basic Setup in Express
### **Step 1: Create an Express Server**
Create a new file called `server.js` and set up a basic Express server:
```javascript
const express = require("express");
const multer = require("multer");
const app = express();

app.use(express.json()); // Middleware to parse JSON data

app.listen(3000, () => console.log("Server running on port 3000"));
```

### **Step 2: Setting Up Multer for File Uploads**
Add Multer middleware to handle file uploads:
```javascript
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), (req, res) => {
    res.send("File uploaded successfully!");
});
```
- `upload.single("file")`: Handles single file upload with the form field name "file".

### **Step 3: Testing the Upload Route**
Use **Postman** or an **HTML form** to test the file upload:
```html
<form action="/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="file" />
    <button type="submit">Upload</button>
</form>
```
---

## 📌 Multer Storage Options

### **1️⃣ Disk Storage (Saving Files to Disk)**
```javascript
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
const upload = multer({ storage: storage });
```
- Saves files in `uploads/` with a unique timestamped filename.

### **2️⃣ Memory Storage (Saving Files in Buffer)**
```javascript
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
```
- Stores the file as a **buffer** in `req.file.buffer` instead of saving it to disk.

---

## 📌 Uploading Multiple Files
```javascript
app.post("/upload-multiple", upload.array("files", 5), (req, res) => {
    res.send("Multiple files uploaded!");
});
```
- `upload.array("files", 5)`: Allows multiple files (up to 5 files) to be uploaded.

---

## 📌 File Validation (Restrict Type & Size)
```javascript
const upload = multer({
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // Max size: 2MB
    fileFilter: function (req, file, cb) {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true); // Accept file
        } else {
            cb(new Error("Only images allowed!"), false); // Reject file
        }
    }
});
```
---

## 📌 Saving Files to MongoDB using Multer & GridFS

### **Step 1: Install Required Packages**
```sh
npm install mongoose gridfs-stream multer-gridfs-storage
```

### **Step 2: Set Up MongoDB Connection & GridFS Storage**
```javascript
const mongoose = require("mongoose");
const GridFsStorage = require("multer-gridfs-storage").GridFsStorage;
const Grid = require("gridfs-stream");

const conn = mongoose.createConnection("mongodb://localhost:27017/mydb", { useNewUrlParser: true, useUnifiedTopology: true });

let gfs;
conn.once("open", () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("uploads");
});

const storage = new GridFsStorage({
    url: "mongodb://localhost:27017/mydb",
    file: (req, file) => {
        return {
            filename: Date.now() + "-" + file.originalname,
            bucketName: "uploads",
        };
    }
});

const upload = multer({ storage });
```

### **Step 3: Upload File to MongoDB**
```javascript
app.post("/upload", upload.single("file"), (req, res) => {
    res.json({ file: req.file });
});
```

### **Step 4: Retrieve Files from MongoDB**
```javascript
app.get("/file/:filename", async (req, res) => {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    if (!file) return res.status(404).json({ message: "File not found" });

    const readstream = gfs.createReadStream(file.filename);
    readstream.pipe(res);
});
```

---

## 📌 Common Errors & Fixes
| Error | Cause | Fix |
|-------|-------|-----|
| `Unexpected field` | Wrong field name in `upload.single()` or `upload.array()`. | Ensure field names match in `req.body` and HTML form. |
| `LIMIT_FILE_SIZE` | File size exceeds limit. | Set `limits: { fileSize: x }` in Multer config. |
| `ENOENT: no such file or directory` | Uploads folder missing. | Manually create the folder or use `fs.mkdirSync()`. |

---

## 📌 Summary
Multer simplifies file uploads in Node.js applications. By selecting the appropriate storage method (**Disk, Memory, or MongoDB/GridFS**), you can manage files efficiently and securely. You can also integrate Multer with **cloud storage services** like AWS S3, Cloudinary, or Firebase for scalable solutions.

---

## 📌 References
- [Multer Official Documentation](https://github.com/expressjs/multer)

