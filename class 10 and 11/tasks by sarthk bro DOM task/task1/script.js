var btn =  document.querySelector('button');
 var flag = 0 
btn.addEventListener('click',function(){
    if (flag === 0 ) {
        btn.textContent = "clicked!"
        flag = 1
    }
    else{

        btn.textContent = "click"
        flag = 0
    }
})