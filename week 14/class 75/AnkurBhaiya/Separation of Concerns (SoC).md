# Why Use Extra Methods in Mongoose Schema Instead of Controllers?

## **1️⃣ Separation of Concerns (SoC)**
In software design, keeping different responsibilities separate leads to cleaner and more maintainable code.

- **Model (Mongoose Schema)** → Handles **data-related logic** (e.g., validation, hashing passwords, token generation).
- **Controller** → Handles **request-response logic** (e.g., handling user input, sending responses, calling model methods).

By moving logic like password hashing and token generation to the schema, we avoid unnecessary repetition in the controllers.

---

## **2️⃣ Reusability & Maintainability**
When you keep logic inside the model, you can **reuse** it across multiple controllers or services, making your application more **modular**.

### Example: Password Hashing
**Before (Controller contains the logic):**
```js
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

module.exports.registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashedPassword });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: "Error creating user" });
    }
};
```

**After (Move Hashing to Model):**
```js
userSchema.statics.hashPassword = async function(password) {
    return bcrypt.hash(password, 10);
};
```

Now, the controller just calls the method:
```js
module.exports.registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await User.hashPassword(password);
        const newUser = await User.create({ name, email, password: hashedPassword });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: "Error creating user" });
    }
};
```
✅ **Benefit:** Less code repetition, easier debugging, and improved readability.

---

## **3️⃣ Encapsulation**
Encapsulation means keeping data and methods that operate on that data together. The model should handle **user-related logic**, so keeping methods like `hashPassword` and `generateToken` inside the schema makes sense.

Instead of controllers handling these operations every time, the model itself knows how to:
- Hash a password
- Compare a password
- Generate a JWT token
- Verify a JWT token

Encapsulation reduces the risk of **accidental data manipulation** in the controller.

---

## **4️⃣ Security Benefits**
By centralizing security-related operations inside the model, we ensure consistency and prevent security vulnerabilities caused by inconsistent implementations in multiple controllers.

For example:
```js
userSchema.methods.generateToken = function() {
    return jwt.sign({ id: this._id, email: this.email }, config.JWT_SECRET, { expiresIn: "1h" });
};
```
Now, every time a user logs in, we simply call:
```js
const token = user.generateToken();
```
✅ **Benefit:** We avoid implementing token logic differently across controllers.

---

## **5️⃣ Clean & Readable Controllers**
Controllers should be lightweight and only handle request-response logic. If business logic like hashing and token generation stays in the model, the controller becomes **cleaner and easier to understand**.

**Before (Messy Controller):**
```js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const User = require("../models/user.model");

module.exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id, email: user.email }, config.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ success: true, token });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
```

**After (Clean Controller):**
```js
module.exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isValid = await user.comparePassword(password);
        if (!isValid) return res.status(401).json({ message: "Invalid credentials" });

        const token = user.generateToken();
        res.status(200).json({ success: true, token });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
```
✅ **Benefit:** The controller is now **short, readable, and only responsible for handling HTTP requests.**

---

## **📌 Conclusion: Why Shift Logic to Models?**
| Benefit | Explanation |
|---------|-------------|
| ✅ Separation of Concerns | Keeps data logic in the model, and request handling in controllers. |
| ✅ Reusability | Methods can be reused across multiple controllers, avoiding duplicate code. |
| ✅ Encapsulation | Business logic stays close to the data it operates on, preventing unintended modifications. |
| ✅ Security | Centralizing authentication and hashing prevents security flaws. |
| ✅ Cleaner Controllers | Controllers are focused on handling requests, making them easier to read and maintain. |

By using **Mongoose schema methods (`.methods` and `.statics`)**, we make our code **more modular, maintainable, and scalable**. 🚀

