var open = document.querySelector("#open")
var close = document.querySelector("#close")

var page1 =  document.querySelector('.page1')
var mp =  document.querySelector('#mp')
// console.log(open,close,page1,mp)
var mpon = 0



open.addEventListener('click',function(){
    mp.style.display = "block"
    open.style.display = "none"

    page1.style.backgroundColor = "grey"
    mpon = 1
// console.log('chaha')
})

close.addEventListener('click',function(){
    if(mpon===1){
        mp.style.display = "none"
        page1.style.backgroundColor = "white"
        open.style.display = "flex"

        mpon = 0 

        


    }
})
mp.addEventListener('click',function(){
        if(mpon===1){
        mp.style.display = "none"
        page1.style.backgroundColor = "white"
        mpon = 0 


        }
    })
