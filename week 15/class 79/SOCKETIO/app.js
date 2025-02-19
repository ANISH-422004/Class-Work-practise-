const express = require("express")
const app = express()
const http = require("http")
const socketIO = require("socket.io")


const server = http.createServer(app)
const io = socketIO(server)


app.use(express.static("views"))
app.set('view engine', 'ejs')

io.on("connection", function (socket) {
    console.log("connected ID", socket.id)

    socket.on("abcd", () => {
        console.log(`Hey Welcome to chat ${socket.id}`)
        io.emit("joinedChatRoom",  `${socket.id} Joined the server`)
    })


    socket.on("disconnect", () => {
        console.log("disconnected ID : ", socket.id)
        io.emit("LeftChatRoom",  `${socket.id} Left the server`)
    })


    socket.on("typing",()=>{
        socket.broadcast.emit("Typing" , socket.id)
    })


})



app.get("/", (req, res) => {
    res.render("index")
})

server.listen(3000, () => {
    console.log(`server Running on 3000`)
})

