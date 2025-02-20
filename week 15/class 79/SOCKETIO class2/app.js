const express = require("express")
const app = express()
const http = require("http")
const socketIO = require("socket.io")


const server = http.createServer(app)
const io = socketIO(server)


app.use(express.static("views"))
app.set('view engine', 'ejs')

io.on("connection",(socket)=>{
    console.log(`ID connected : ${socket.id}`)

    socket.on("CustomEvent",()=>{
        console.log("customEventFormClient")
    })

})


app.get("/", (req, res) => {
    res.render("index")
})

server.listen(3000, () => {
    console.log(`server Running on 3000`)
})

