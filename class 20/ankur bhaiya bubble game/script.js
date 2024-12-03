let  numbertoclickValue =  document.querySelector("#numbertoclick-value")
let  timeValue =  document.querySelector("#time-value")
let bubbelContainer = document.querySelector("#bubble-container")
let score = document.querySelector("#score-value")
// console.log(score);
let bubbles = document.querySelectorAll(".bubble")
console.log(bubbelContainer);
let resetbtn = document.querySelector('#reset')

function bubblenumberset(){
    bubbles.forEach(function(bubble){
        // console.log(bubble.innerText);
        bubble.innerText = `${Math.floor(Math.random()*9 +1)}`
    })
}
bubblenumberset();

function targetsetting(){
    numbertoclickValue.innerText = `${Math.floor(Math.random()*9 +1)}` 
}
targetsetting()



function game(){

    bubbelContainer.addEventListener("click",function(dets){    
        // console.log(dets.target.className);
        if(dets.target.className==="bubble"){
            // console.log("ojk");
            console.log(parseInt(dets.target.innerText , 10));
            if(parseInt(dets.target.innerText , 10)===parseInt(numbertoclickValue.innerText,10)){
                console.log('true');
                score.innerHTML = parseInt(score.innerHTML,10) + 1
                targetsetting()
                bubblenumberset();

                
            }
            else{
                console.log('flase');
                targetsetting()
                bubblenumberset();
            }
            
        }
        

    })
}
game()


function timmer (){
  let count = 60 
  let countdown = setInterval(function(){
      count--
    //   console.log(count);
      timeValue.innerText = count
      
    if(count===0){
        clearInterval(countdown)
        timeValue.innerHTML = `time over` 
        // alert( ` game over , your sorce is ${}`)
        bubbelContainer.style.pointerEvents=  "none";
        bubbelContainer.innerHTML=  `<h1 style="color : yellow ">your game is over and your score is ${score.innerText}</h1> `;

    }

},1000)
}
timmer()


