const users = [
    {src:"https://images.unsplash.com/photo-1501432377862-3d0432b87a14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"Anish",age:20,status:"Unknown"},
    {src:"https://images.unsplash.com/photo-1625642123545-f0f68b1621e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",name:"Agniv",age:18,status:"Unknown"},
    {src:"https://plus.unsplash.com/premium_photo-1668896122605-debd3fed81a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",name:"Shream",age:22,status:"Unknown"},
    {src:"https://images.unsplash.com/photo-1521676259650-675b5bfec1ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",name:"Anjolaiya",age:21,status:"Unknown"},
    {src:"https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",name:"Anjolaiya",age:21,status:"Unknown"},
    {src:"https://plus.unsplash.com/premium_photo-1670573802857-aeae2b087487?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",name:"Anjolaiya",age:21,status:"Unknown"}
]

let body = document.querySelector("body");


users.forEach(function(user){
    // console.log(user);
    let card = `        <div class="card">
                                    <img src=${user.src} alt="">
                                    <h3>${user.name}</h3>
                                    <h4>age:${user.age}</h4>    
                                    <h2>${user.status}</h2>
                                    <button>make friend</button>
                        </div>`
    document.querySelector("main").innerHTML += card;
})


// body.addEventListener("click", function(e) {
//     // Check if clicked element is a button
//     if (e.target.tagName === "BUTTON") {
//         const statusElement = e.target.parentElement.querySelector("h2");
//         const buttonElement = e.target;

//         if (buttonElement.innerText === "make friend") {
//             statusElement.innerText = "friend";
//             statusElement.style.color = "green";
//             buttonElement.innerText = "unfriend";
//         } else {
//             statusElement.innerText = "Unknown";
//             statusElement.style.color = "red";
//             buttonElement.innerText = "make friend";
//         }
//     }
// })

body.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        const card = e.target.parentElement;
        const statusElement = card.querySelector("h2");
        const buttonElement = e.target;
        const userName = card.querySelector("h3").innerText;
        
        // Find the user in the array
        const user = users.find(u => u.name === userName);
        
        if (buttonElement.innerText === "make friend") {
            // Update both DOM and data
            statusElement.innerText = "friend";
            statusElement.style.color = "green";
            buttonElement.innerText = "unfriend";
            user.status = "friend";
        } else {
            // Update both DOM and data
            statusElement.innerText = "Unknown";
            statusElement.style.color = "red";
            buttonElement.innerText = "make friend";
            user.status = "Unknown";
        }
        
        // Log to verify the array is updated
        // console.log("Updated users:", users);
    }
})