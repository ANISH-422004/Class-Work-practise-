
const bugs = [
     "https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-lady-bug-icon-png-image_3760539.jpg",
     "https://e7.pngegg.com/pngimages/242/884/png-clipart-software-bug-bug-cartoon-true-bugs.png",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_VNEbpn56KZo5N3iQ8XoYK8bkTmPLhc381kNx1BVVxC3rLGMQQ0NkD-xT5ZxkfxcO3UA&usqp=CAU",
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXtaG6rLmbO6nyUdlBGRg3rq2nib2-Qr4pdSltavyEIlBcRloSWeujHDWfH2qLDONT1mc&usqp=CAU'
]

var btn = document.querySelector("button");
btn.addEventListener("click",function(){
     let bug = document.createElement("img");
     bug.setAttribute("src",bugs[Math.floor(Math.random()*bugs.length)]);
     document.body.appendChild(bug);
     bug.style.left = Math.floor(Math.random()*95)+"%";
     bug.style.top = Math.floor(Math.random()*95)+"%";
})
