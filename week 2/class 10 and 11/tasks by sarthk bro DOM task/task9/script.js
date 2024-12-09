// Make a "dark mode" button that toggles the background color of the page between black and white.


var btn = document.querySelector('button')
var main =  document.querySelector('main')
// console.log(btn,main)


function darklight(){
    flag=0
    btn.addEventListener('click',function(){
        if(flag===0){
            main.style.backgroundColor = "black"
            main.style.color = "white"
            flag = 1 
        }else{
            main.style.color = "black"
            main.style.backgroundColor = "white"
            flag = 0
        }

    })
}

darklight()