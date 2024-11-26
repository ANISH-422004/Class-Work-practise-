// let h = Number( prompt("hours"))
// let m = Number(prompt("minutes"))
// console.log(`total minutes ${h*60 + m}`)

// Program to convert minutes into hours and remaining minutes



// function convertMinutes(inputMinutes) {
//     // Calculate hours and remaining minutes
//     const hours = Math.floor(inputMinutes / 60);
//     const minutes = inputMinutes % 60;

//     // Display the result
//     console.log(`Total Time: ${hours} hour(s) and ${minutes} minute(s)`);
// }

// // Example usage
// const inputMinutes = parseInt(prompt("Enter the total number of minutes: "), 10);
// convertMinutes(inputMinutes);




// const a = parseInt(prompt("Enter the value of a:"));
// const b = parseInt(prompt("Enter the value of b:"));
// const c = parseInt(prompt("Enter the value 1: "));


// function findlargerstnum(a,b,c){
//         if (a>b & a>c){
//             return  a ; 
//         }
//         else if(b>a && b>c){
//             return b;
//         }
//         else{
//             return c;
//         }
// }

// let ans = findlargerstnum(a,b,c)
// console.log(ans)


// //  CLASSSSSSSSSS 9


// for (i=0; i<=10 ; i++){
//     var a =12>13 ? console.log("hi") : console.log("helo")

// }

// function a(){
//     console.log("hello")
//     let a =12
// }
// console.log(a)





//     {

//         var a =12;

//     }

//     console.log(a)  

// // console.log(123%10)




// let check = (a)=>{
//     if(a>0){
//         if(a%2===0){
//             console.log(" positive and even")
//         }else{
//             console.log("positive and odd")
//         }
//     }else{
//         if(a%2===0){
//             console.log("negative and even")
//         } else{
//             console.log("negative and odd")
//         }
//     }
// }

// check(2)
 

// age = parseInt(prompt("age dede bro "), 10);
// if (age >= 18 ){
//     window.alert("dekle bro")
// }else{
//     window.alert("amt dekh pgo dekh")
// }



// let maths = parseInt(prompt("maths"), 10)

// let science = parseInt(prompt("science"), 10)

// let english = parseInt(prompt("english"), 10)

// let socialStudies = parseInt(prompt("social studies"), 10)


// let totalMarks = maths + science + english + socialStudies
// console.log(totalMarks)     
// let persentage = (totalMarks / 400 )*100 
// console.log(   persentage )


// if(persentage>75){
//     window.alert("A")
// }
// else if(persentage>55){
//     window.alert("B")
// }
// else if(persentage>45){
//     window.alert("C")
// }
// else{
//     window.alert("D")
// }


// let alpha = prompt("Enter a single letter:").toLowerCase(); // Convert input to lowercase
// var v = ["a", "e", "i", "o", "u"];
// let flag = 0; // Initialize the flag

// for (let i = 0; i < v.length; i++) {
//   if (alpha === v[i]) {
//     console.log("Yes, it's a vowel.");
//     flag = 1; // Update flag
//     break; // Exit the loop
//   }
// }

// if (flag === 0) {
//   console.log("No, it's not a vowel.");
// }





// console.log(13/2)










// for (let i=10 ; i>=0 ; i--){
//     console.log(i)
// }

// let i=10
// while(i>0){
//     console.log(i)
//     i--
// }

  
// let abcd=  function(...d){
//     console.log(d)
// }

// abcd(1,2,3,4,5,6,7,8,9,10,11,12)



// let a = p => console.log(`a: ${p}`)

// a(1,2)


//hoisting 
// console.log(a)
// var a = 12;


// n=parseInt(prompt(),10)
// for (let i=n ; i<=n+10 ; i++){
//     console.log(i)
// }


// // Function to calculate the sum of all factors of a number
// function sumOfFactors(num) {
//     let sum = 0;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             console.log(i); // Print the factor
//             sum += i; // Add the factor to the sum
            
//         }
//     }
//     return sum;
// }

// // Input: Change this to test with different numbers
// const number = 10; // Example input
// const result = sumOfFactors(number);

// // Output the result
// console.log(`The sum of all factors of ${number} is: ${result}`);



// let n = 6 ;
// let ans = 1
// for (let i=1; i<=n ; i++) {
//     ans *= i 
// }

// console.log(ans)




////////////////////////////// class 10 


// let arr = [1, 2, 3, 4, 5]

// arr.splice(2,1)
// console.log(arr)
 
// let newarr = arr.map(function(val){
//     return val*2
// })


// let a = new Array(100)
// a[100]=1;
// console.log(a)



// let a = [1, 2, 3, 4, 5]
// console.log(a.reduce(function(acc,val){
//     return  acc + val/2
// },0)

// )



// let obj = new Object();
// obj[0]=1;

// console.log()


// setTimeout(() => {
//     console.log("anish")
// }, 3000);


// count=0;
// let a =setInterval(() => {
//     console.log(count); 
//     count+=1
//     if (count===5){
//         clearInterval(a)
//     }
// }, 1000);


// fetch(`https://randomuser.me/api/`).
// then((raw)=>    raw.json())
// .then( readable=>{console.log(readable.results[0].name.last)})

// import axios from 'axios';



// axios.get(`https://randomuser.me/api/`)
// .then(r => console.log(r.data.results[0].location))




// const promise = new Promise (function(resolve,reject){
//     fetch(`https://randomuser.me/api/`)
//     .then(raw => raw.json())
//     .then(function(result){
//         if(result.results[0].gender === 'male'){
//            return resolve()
//         } 
//         else{
//           return  reject()
//         }
//     })
// })


// promise.then(()=>console.log("gren butn" )).catch(()=>console.log("red butn" ))






// function getdata (url,callback){
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result =>{
//         callback(result)
//     } ) 
// }

// getdata(`https://randomuser.me/api/`,function(result){
//     console.log(result.results[0].gender)

// })




// function* abcd (){
//     console.log('chala')
//     console.log('chala 2 ')
//     yield 1 ;
//     console.log('chala 3')
//     yield 2 ;

// }
// // abcd()
// let a = abcd();
// console.log(a)
// console.log(a.next())
// // console.log(a.next().value)
// // console.log(a.next().value)




////////////////////////////////////////////////////////CLASS 11


// let a = 'ase efl klkl wefkw'
// const div = document.createElement('div');
// div.innerHTML = "asdfaefae"
// div.style.height = '100%';
// div.style.width = '100%';
// div.style.backgroundColor = 'red';
// document.body.appendChild(div);


// let btn = document.querySelector("button")
// let bulb = document.querySelector('#circle')
// var flag =0

// btn.addEventListener('click',()=>{
//     if (flag===0){
//     bulb.style.backgroundColor = "yellow"
//     btn.textContent = "off"
//     flag = 1
//     }
//     else{
//      bulb.style.backgroundColor = "transparent"
//     btn.textContent = "on"
//     flag = 0
//     }
// })




// let h1 =  document.querySelector('h1')
// // h1.innerHTML='<i>Hellow</i>'

// // h1.style.backgroundColor="red"
// // h1.style.color="yellow"
// // h1.textContent="hi hellow"
// // console.log(h1)


// h1.addEventListener('mouseover',()=>{
//     h1.style.color="red"
// })
// // h1.addEventListener('mouseleave',()=>{
// //     h1.style.color="red"
// // })



// let a =  document.querySelector("a")
// let btn =  document.querySelector('#yc')
// var flag =  0
// btn.addEventListener('click',()=>{
//     if (flag === 0 ){
//         a.setAttribute('href',"https://www.youtube.com/")
//         a.textContent = " Youtube "
//         a.style.backgroundColor= "red"
//         flag = 1
//     }else{
//         a.setAttribute('href',"https://chatgpt.com/c/6740208b-2a80-8001-8825-7fc98084312e")
//         a.textContent = " GPT "
//         a.style.backgroundColor= "grey"
        
//         flag = 0


//     }

// })



// let h2 =  document.querySelector('h2')
// h2.addEventListener('click',()=>{
//     h2.style.color = "red"
//     h2.style.backgroundColor = "black"

// })




// var add =  document.querySelector("#todo")
// // var del =  document.querySelector("#todorem")

// add.addEventListener('click',()=>{
//     let box  = document.createElement('div')
//     box.style.backgroundColor = 'green'
//     box.style.border = '1px solid black'
//     box.style.height = '100px'
//     box.style.width = '100px'
//     document.querySelector('body').appendChild(box)
// })


// // del.addEventListener('click',()=>{
// //     // let h1  = document.createElement('h1')
// //     // h1.textContent = "add waa text"
// //     document.querySelector('body').removeChild(h1)
// // })

// var p =  document.querySelector('p')
// p.addEventListener('mouseover',()=>{
//     p.style.fontSize = '2rem'
//     p.style.fontWeight = '600'
// })
// p.addEventListener('mouseleave',()=>{
//     p.style.fontSize = '1rem'
//     p.style.fontWeight = '400'

// })


// var pic =  document.querySelector('img')
// var p =  document.querySelector('p')


// pic.addEventListener("mouseover",()=>{
//     p.textContent = "hat matt laga sirf dekh "
//     p.style.backgroundColor = "red"
//     p.style.color = "yellow"
// })
// pic.addEventListener("mouseleave",()=>{
//     p.textContent = "dekh le bhai "
//     p.style.backgroundColor = "transparent"
//     p.style.color = "grey"

// })



// var box =  document.querySelector('#box')
// // console.log(box)
// box.addEventListener("click",()=>{
//     var c1 =  Math.floor(Math.random()*255)
//     var c2 =  Math.floor(Math.random()*255)
//     var c3 =  Math.floor(Math.random()*255)
//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
// })




let arr  = ['CSK','KKR','MI','RCB','PK','RR']


let btn =  document.querySelector('button')
let h2  =  document.querySelector('h2')
btn.addEventListener('click',()=>{
    var  i =  Math.floor(Math.random()* arr.length )
    h2.innerHTML = arr[i]

})









