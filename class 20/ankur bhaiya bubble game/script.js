var numbertoclick = document.getElementById("numbertoclick");
var time = document.getElementById("time");
var score = document.getElementById("score");
var bubbleContainer = document.querySelector('#bubble-container');


// console.log(numbertoclick,time,score);
// console.log(time.querySelector("#time-value").textContent);


function renderbubble(){
    clutter=`
    `
    for (let i = 0; i < 30; i++) {
        clutter+=`<div class="bubble">${Math.floor(Math.random()*9+1)}</div>`
    }
    bubbleContainer.innerHTML=clutter;
}
renderbubble()

function getNewNumber(){
    let randomNumber = Math.floor(Math.random()*9+1);
    numbertoclick.querySelector("#numbertoclick-value").textContent = randomNumber;
    return randomNumber;
}

function Game() {
    
    let targetNumber = getNewNumber();
    
    
    var timer = setInterval(() => {
        let currentTime = parseInt(time.querySelector("#time-value").textContent);
        if (currentTime <= 1) {
            clearInterval(timer);
            time.querySelector("#time-value").textContent = "0";
            endGame();
        } else {
            time.querySelector("#time-value").textContent = currentTime - 1;
        }
    }, 10);


    function handleBubbleClick(e) {
        if (e.target.classList.contains('bubble')) {
            if (e.target.textContent == targetNumber) {
                document.querySelector("#score-value").textContent = 
                    parseInt(document.querySelector("#score-value").textContent) + 1;
            }
            renderbubble();
            targetNumber = getNewNumber();
        }
    }

    // End game function
    function endGame() {
        let score = parseInt(document.querySelector("#score-value").textContent);
        bubbleContainer.removeEventListener('click', handleBubbleClick);
        alert("Game Over! Your score: " + score);
    }

    // Add single event listener
    bubbleContainer.addEventListener('click', handleBubbleClick);
}
Game()


