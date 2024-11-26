//Create a button that moves box randomly to a new position every time you click over it.

    


var btn =  document.querySelector('button')
var box =  document.querySelector('#box')


btn.addEventListener('click',function(){
    let v1 =  Math.floor(Math.random()*90)
    let v2 =  Math.floor(Math.random()*90)
    box.style.top = `${v1}%`
    box.style.left = `${v2}%`
})