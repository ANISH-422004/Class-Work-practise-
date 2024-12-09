
var parent = document.querySelectorAll(".parent");

console.log(parent[0].childNodes);

parent.forEach(function(ele){
    // console.log();   
    ele.addEventListener("mouseenter",function(){
        ele.style.backgroundColor = "black";
        ele.childNodes[1].style.color = "white";
    })
    ele.addEventListener("mouseleave",function(){
        ele.style.backgroundColor = "white";
        ele.childNodes[1].style.color = "black";
        ele.childNodes[5].style.opacity = 0;
    })

    ele.addEventListener("mousemove",function(dets){
        // console.log(dets.x)
        // console.log(dets.y);
        // console.log();      
        ele.childNodes[5].style.opacity = 1;
        ele.childNodes[5].style.left = `${dets.x}px`;
        // ele.childNodes[5].style.top = `${dets.y}px`;

    })
})
