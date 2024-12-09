   //Add button that, when clicked, increase the size of their associated div boxes.

var btn =  document.querySelector('button');
var circles =  document.querySelectorAll('.circle')
console.log(circles)

var i = 1
    btn.addEventListener('click',function(){
        
        let newval = i + 0.2
        circles.forEach((circle)=>{
            // console.log(circle)
            circle.style.transform = `scale(${newval})`
            
        })
        i = newval
        
    })



