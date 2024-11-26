var btn =  document.querySelector('button');
var img = document.querySelector('img')
var flag = 0 
btn.addEventListener('click',function(){
    if (flag === 0 ) {
        btn.textContent = "make it visible"
        img.style.opacity = "0"    
        flag = 1
    }
    else{
        img.style.opacity = "1"    
        btn.textContent = "make it invisible"
        flag = 0
    }
})