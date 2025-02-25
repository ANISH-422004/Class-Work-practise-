const { log } = require("console");
const app = require("./src/app");
const http = require("http");

const server = http.createServer(app);
const io = require("socket.io")(server);

// 🔹 Global Middleware for Authentication
io.use((socket, next) => {

    console.log(socket.handshake.headers.token)
    
    const token = socket.handshake.headers.token
    if (token === "secret123") { // Example token check
        next(); // Proceed to connection
    } else {
        console.log("Authentication failed!");
        next(new Error("Authentication failed!"));
        
        // ✅ What happens here?
        // The server calls next(new Error("Authentication failed!")), which prevents the connection.
        // The client listens for "connect_error" and logs the error message.
        // The client can then handle the error appropriately.        
    }
});

 //🔹 How Does Socket.IO Internally Handle This?

// Socket.IO has built-in error handling for connection middleware (io.use()).
// Whenever next(new Error("some error")) is used:

// The connection is denied.
// The error is automatically sent to the client as a "connect_error" event.
// The client can then handle it appropriately.
// Since authentication middleware runs before a connection is fully established, the error is thrown before io.on("connection", ...) is triggered. This is why no try...catch block is needed here.


//socket --> single User
//io --> whole User 

io.on("connection", (socket) => {
    console.log(`Connected ID: ${socket.id}`);

    // 🔹 Event Middleware for Message Validation
    //The socket.use() function is event middleware in Socket.IO. It intercepts every incoming event and runs some logic before the event handler executes.

    socket.use(([event, message], next) => {
        if (typeof message !== "string") {
            console.log(`Invalid message from ${socket.id}`);
            return next(new Error("Message must be a string"));
        }
        next();
    });

    // Example of sending a message
    socket.on("send message", (message) => {
        console.log(`Message from ${socket.id}: ${message}`);
        io.emit("chat-message", message);
    });
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
