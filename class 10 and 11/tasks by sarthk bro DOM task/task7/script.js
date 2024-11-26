//Implement a "like" counter for a button that increments the count displayed next to it.
// like counter : 0

    


var btn =  document.querySelector('button')
var h1 =  document.querySelector('h1')

let count = 0 
btn.addEventListener('click',function(){
    count += 1
    h1.textContent = `like counter : ${count}`
})