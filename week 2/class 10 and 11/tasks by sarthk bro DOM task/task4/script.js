



let arr = ['CSK','KKR','MI','RCB','PK','RR']


let btn =  document.querySelector('button')
let h2  =  document.querySelector('h2')
btn.addEventListener('click',()=>{
    var  i =  Math.floor(Math.random()* arr.length )
    var c1 =  Math.floor(Math.random()*255)
    var c2 =  Math.floor(Math.random()*255)
    var c3 =  Math.floor(Math.random()*255)
    h2.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    h2.innerHTML = arr[i]
    h2.style.color = "crimson"
})









