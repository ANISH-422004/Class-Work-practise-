var body = document.querySelector("body");
var img = document.querySelector("img");
var button = document.querySelector("button");

var  movex = 0;
var  movey = 0;

var resetactivate = false;

body.addEventListener("keypress",(dets)=>{
    console.log(dets.key);
    if(dets.key == "d"){
        movex += 10;
    }
    if(dets.key == "a"){
        movex -= 10;
    }
    if(dets.key == "s"){
        movey += 10;
    }
    if(dets.key == "w"){
        movey -= 10;
    }
    console.log(movex); 
    console.log(movey);
    img.style.left = `${movex}%`;
    img.style.top = `${movey}%`;


     if ( movex >= 90 && movey >= 90){
        img.style.opacity = 0;
        button.style.display = "block";
        resetactivate = true;
     }

     if (resetactivate){
        button.addEventListener("click",()=>{
            img.style.opacity = 1;
            button.style.display = "none";
            resetactivate = false;
            movex = 0;
            movey = 0;
            img.style.left = `${movex}%`;
            img.style.top = `${movey}%`;
        })
     }
})

