const users = [
    {
        src: "https://images.unsplash.com/photo-1501432377862-3d0432b87a14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Anish"
    },
    {
        src: "https://images.unsplash.com/photo-1625642123545-f0f68b1621e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
        name: "Sarah"
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1668896122605-debd3fed81a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
        name: "Mike"
    },
    {
        src: "https://images.unsplash.com/photo-1521676259650-675b5bfec1ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
        name: "Elena"
    },
    {
        src: "https://plus.unsplash.com/premium_photo-1670573802857-aeae2b087487?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
        name: "John"
    }
];

let main = document.querySelector("main");




function display(){
    clutter=``
    users.forEach((user,idx)=>{
        clutter+=`
        <div id="overlay" style="opacity: 0; pointer-events: none;">
        <img src="" alt="">
        <button id="close">close</button>
        </div>
        <div class="statusdiv" id=${idx}>
        <img src=${user.src} alt="">
        <h3>${user.name}</h3>
        </div>
        
        `
        
    })
    
    main.innerHTML=clutter;
    
}

display();

let overlay = document.querySelector("#overlay");
let close = document.querySelector("#close");
let statusdiv = document.querySelectorAll(".statusdiv");

statusdiv.forEach((user)=>{
    user.addEventListener("click",(e)=>{
        // console.log(e);
        
        let idx = e.target.id;
        overlay.style.opacity = 1;
        overlay.style.pointerEvents = "all";
        overlay.querySelector("img").src = users[idx].src;
    })
})

close.addEventListener("click",()=>{
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = "none";
})

overlay.addEventListener("click",()=>{
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = "none";
})
