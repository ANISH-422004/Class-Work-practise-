const { log } = require('console')
const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.url);
    
    if(req.url == "/" ){
        res.end("HomePage");
        console.log(req.url);
        
        
    }
    if(req.url == "/about" ){
        res.end("AboutPage");
        
    }
    if(req.url == "/profile" ){
        res.end("Profile Page ");
        
    }
    


})

server.listen(3000)