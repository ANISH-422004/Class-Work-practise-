const app = require("./src/app")
const http = require("http")

const server = http.createServer(app)
const io = require("socket.io")(server)






//socket --> single User
//io --> whole User 
io.on("connection", (socket) => {
    console.log(`connected ID : ${socket.id}`);


    // Example of sending a message to Postman
    socket.on('send message', (message) => {
        console.log(`Message from ${socket.id}: ${message}`);

        io.emit("chat-message", message )
    });
});







server.listen(3000, () => {
    console.log("server running on port 3000")
})


