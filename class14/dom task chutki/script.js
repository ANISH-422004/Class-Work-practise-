var body = document.querySelector("body");
var img = document.querySelector("img");
var button = document.querySelector("button");

var  movex = 0;
var  movey = 0;

var resetactivate = false;

body.addEventListener("keypress",(dets)=>{
    console.log(dets.key);
    if (0<=movex && movex<=100 && 0<=movey && movey<=100){
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
    }

    console.log(movex); 
    console.log(movey);

    img.style.left = `${movex}%`;
    img.style.top = `${movey}%`;


     if ( movex >= 80 && movey >= 80){
        img.style.opacity = 0;
        img.style.display = "none";
        button.style.display = "block";
        resetactivate = true;

     }

     if (resetactivate){
        button.addEventListener("click",()=>{
            img.style.opacity = 1;
            img.style.display = "block"
            button.style.display = "none";
            resetactivate = false;
            movex = 0;
            movey = 0;
            img.style.left = `${movex}%`;
            img.style.top = `${movey}%`;
        })
     }
})

