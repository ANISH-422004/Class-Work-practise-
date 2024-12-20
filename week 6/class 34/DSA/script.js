
// ///Bubble sort :::::

// arr = [10,8,16,2,5,1,20,-1,-20,-Infinity,+Infinity]
// function bubblesort(arr){
//     for (let i = 0 ; i<arr.length-1 ; i++){ // number of phases 
//         for (let j = 0 ; j < arr.length-1-i ; j++ ){  //  numer of excution for each hase
//             if ( arr[j]> arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]   // swap 
//             }
//             // passing (by default)
//         }
//     }
//     return arr        
    
// }
// console.log(bubblesort(arr))

/////////////////////////// TASK_1///////////////////////////////////////

//Q1.
// let name = prompt("enter Your Name :")
// let age = prompt("enter Your Age :")
// let Favcolor = prompt("enter Your Favouritecolor :")
// let city = prompt("enter Your city Name :")

// console.log(`Hello! ${name} , You are${age}'s old  , Your favouritecolour is ${Favcolor} , And You live in ${city}`)




//Q2.
// let totalminutes = Number(prompt("total minutes :"))
// let hrs =  Math.floor(totalminutes/60)
// let remainingminutes = totalminutes - hrs*60

// console.log(`Total time : ${hrs} Hours : ${remainingminutes} minutes`);




// Q3.
// let number = Number(prompt("Enter Exam Marks :"));

// if (100 >= number && number >= 90) {
//     console.log("A");
// } else if (90 > number && number >= 75) {
//     console.log("B");
// } else if (75 > number && number >= 60) {
//     console.log("C");
// } else if (60 > number && number >= 50) {
//     console.log("D");
// } else if (50 > number && number >= 35) {
//     console.log("E");
// }else{
//     console.log("Fail");
    
// }



// //Q4.
// let a = Number(prompt("enter first number : "))
// let b = Number(prompt("enter second number : "))
// let opt = prompt("operation to perform")

// if (opt==="+" || opt==="-" || opt==="*" || opt==="/" || opt==="%" ){
//     if(opt==="+"){
//         console.log(a+b);
//     }
//     if(opt==="-"){
//         console.log(a-b);
//     }
//     if(opt==="/"){
//         console.log(a/b);
//     }
//     if(opt==="*"){
//         console.log(a*b);
//     }
//     if(opt==="%"){
//         console.log(a%b);
//     }
// }
// else{
//     console.log("invalid operation");
    
// }

//Q5. fizz , buzz , fizzbuzz
// for (let i=1 ; i<=50 ; i++ ){

//     if (i%5===0 && i%3===0){
//         console.log("FIZZBUZZ"+i);
        
//     }else{
//         if (i%3===0){
//             console.log("fizz"+ i);
            
//         }
//         if (i%5===0){
//             console.log("bzz"+i);
            
//         }
//     }
// }


////////////////////////TASK2////////////////////
// Q1.
// n= 3
// let a = 0
// let b = 1
// if (n<=0){
//     console.log("invalid number");
    
// }
// else{
//     if(n>=1){
//         console.log(a);
        
//     }
//     if(n>=2){
//         console.log(b);
        
//     }
//     for (let i =3 ; i<=n ; i++ ){
//         c=a+b
//         console.log(c);
        
//         a=b
//         b=c
//     }
// }





// Q2. LCM lowest common multiplee the lowest number which s multiple for bi=oth a and b or more numbers

let a = Number(prompt("enterfirstnumber:"))
let b = Number(prompt("enterSecondnumber:"))

