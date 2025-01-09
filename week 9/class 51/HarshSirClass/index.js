const { log } = require('node:console');
const fs = require('node:fs');

//writing on a existing file or creating and then writing on them 
// fs.writeFile("./anish/a.txt","asnbahba",(e)=>{
//     if (e) {
//         console.log(e.message);

//     }
//     else console.log("created");

// })


// reading a file 

// fs.readFile("a.txt",{encoding:"utf8"},(e,data)=>{
//     if (e) {
//         console.log(e.message);

//     } else {
//         console.log(data);

//     }
// })


//appending something to the file 
// fs.appendFile("a.txt"," hey there",function(e){
//     if (e) {
//         console.log(e.message);

//     } else {
//         console.log("updated");

//     }
// })


// renaming file :

// fs.rename("./anish/yy.txt","./anish/xx.txt",(e)=>{
//     if (e) {
//         console.log(e.message);

//     } else {
//         console.log("renamed");

//     }
// })


//deleting file
// fs.unlink("./anish/m.mp3",(e)=>{
//     if (e) {
//         console.log(e.message);

//     } else {
//         "fileDeleted"
//     }
// })


// creating folder 
// fs.mkdir("./folder2",(e)=>{
//     if (e) {
//         console.log(e.message);

//     } else {
//         console.log("folder created");

//     }
// })

// fs.writeFile("./folder2/2.txt","dajsdhaishdia",(e)=>{
//     if (e) {
//         console.log(e.message);

//     } else {
//         console.log("folder created");

//     }
// })




///reading a folder  fs.readdir(path[, options], callback)path <string> | <Buffer> | <URL>
// options <string> | <Object>
// encoding <string> Default: 'utf8'
// withFileTypes <boolean> Default: false
// recursive <boolean> If true, reads the contents of a directory recursively. In recursive mode, it will list all files, sub files and directories. Default: false.
// callback <Function>
// err <Error>
// files <string[]> | <Buffer[]> | <fs.Dirent[]></Error>



// fs.readdir("./testfolder", { withFileTypes: true }, (e, files) => {
//     if (e) {
//         console.log(e.message);

//     } else {
//         for (let i = 0; i < files.length; i++) {
//             if (files[i].isDirectory()) {

//                 console.log("Folder", files[i].name);
//             } else {
//                 console.log("File", files[i].name);

//             }
//         }

//     }
// })


//deleting a folder 

// fs.rmdir("./delfolder",{recursive : true},(e)=>{
//     if (e) {
//         console.log(e.message);
        
//     } else {
//         console.log("deleted Folder");
        
//     }
// })
/////////////////////////////////////////HTTP MODULE

// const http = require('node:http');

// // Create a local server to receive data from
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello Worldasda!',
//   }));
// });

// server.listen(8000);