// /Create a mouse follower

    


var crsr =  document.querySelector('main .cursor')
console.log(crsr)
var main =  document.querySelector('main')
console.log(main)


main.addEventListener('mousemove',function(dets){
    // console.log(dets.x,dets.y)

    crsr.style.top = `${dets.y}px`
    crsr.style.left = `${dets.x}px`
})