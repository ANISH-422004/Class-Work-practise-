
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var btn = document.querySelector("button");


btn.addEventListener("click",function(){
     let img1src = img1.getAttribute("src");
     let img2src = img2.getAttribute("src");
     img1.setAttribute("src",img2src);
     img2.setAttribute("src",img1src);
})
