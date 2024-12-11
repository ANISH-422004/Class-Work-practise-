/////Q. multiplication table

// let n = Number(prompt("Number"));

// for (i=1 ; i<=10 ; i++) {
//     console.log(`${n}X${i} = ${n*i}`);
// }

//////Q.movie rating
// const rating = parseFloat(prompt('enter rating'));
// const str = prompt('Enter movie name');

//     if(rating >= 0.0 & rating <= 2.0){
//         console.log(`${str} is a flop with rating ${rating}`);
//     }
//     else if(rating >= 2.1 & rating <= 3.4){
//         console.log(`${str} is a semi-hit with rating ${rating}`);
//     }
//     else if(rating >= 3.5 & rating <= 4.5){
//         console.log(`${str} is a hit with rating ${rating}`);
//     }
//     else if(rating >= 4.6 & rating <= 5.0){
//         console.log(`${str} is a super hit with rating ${rating}`);
//     }

//////Q. profile based program
// const gender = prompt("Enter gender (male/female)").toLowerCase();

// if (gender === "male" || gender === "female") {
//   const serviceYear = Number(prompt("Enter service year"));
//   const qualification = prompt(
//     "Enter qualification (graduate/post-graduate)"
//   ).toLowerCase();

//   const salaryData = {
//     male: {
//       "post-graduate": { longService: 15000, shortService: 10000 },
//       graduate: { longService: 10000, shortService: 7000 },
//     },
//     female: {
//       "post-graduate": { longService: 12000, shortService: 10000 },
//       graduate: { longService: 9000, shortService: 6000 },
//     },
//   };

//   const serviceType = serviceYear >= 10 ? "longService" : "shortService";

//   if (salaryData[gender][qualification]) {
//     console.log(
//       `Your salary is ${salaryData[gender][qualification][serviceType]}`
//     );
//   } else {
//     console.log("Invalid qualification");
//   }
// } else {
//   console.log("Invalid gender");
// }





///////////Q. isbn number

// conditions to verify it ISBN number

//An ISBN (International Standard Book Number) is a 10 digit number that is used to identify a book.
//The first nine digits of the ISBN number are used to represent the Title, Publisher and Group of the book and the last digit is used for checking whether ISBN is correct or not.

//The first 9 digits of it, can take any value between 0 and 9, but the last digits, sometimes may take value equal to 10; this is done by writing it as ‘X’.

//To verify an ISBN, calculate 10 times the first digit, plus 9 times the second digit, plus 8 times the third digit and so on until we add 1 time the last digit. If the final number leaves no remainder when divided by 11, the code is a valid ISBN.

// let num = Number(prompt('Enter a 10-digit number for ISBN validation:'));
// let count = 0;
// let sum = 0;
// let copy = num;

// while (num > 0) {
//     count++;
//     num = Math.floor(num / 10);
// }

// if (count !== 10) {
//     console.log('Not a valid ISBN (must be 10 digits)');
// } else {
//     let multiplier = 10;
//     while (copy > 0) {
//         let ld = copy % 10;
//         sum += ld * multiplier;
//         copy = Math.floor(copy / 10);
//         multiplier--;
//     }

//     // Check if the sum is divisible by 11
//     if (sum % 11 === 0) {
//         console.log('It’s a valid ISBN');
//     } else {
//         console.log('Not a valid ISBN');
//     }
// }



//////Q, HCF/GCD
// let num1 = Number(prompt('Enter a number'))
//     let num2 = Number(prompt('Enter another number'))   
    
//     let hcf = 0
//     let small = num1 < num2 ? num1 : num2

//     for (var i = small; i > 0; i--){
//         if (num1 % i == 0 && num2 % i == 0){
//             hcf = i
//             break;
//         }
//     }
    
// console.log('HCF of '+num1+' and '+num2+' is '+hcf);

///Harshad Number  
// let num = Number(prompt("number"))

// let sod  =  0 

// for(let i = 1; i < num; i++){
//     if(num % i == 0){
//         sod += i
//     }
// }

// if(num % sum == 0){
//     console.log(`${num} is a Harshad Number`)
// }else{
//     console.log(`${num} is not a Harshad Number`)   
// }






///////Q.  Abundant number
//A number n is said to be an Abundant Number if the sum of all the proper divisors of the number denoted by sum(n) is greater than the value of the number n. And the difference between these two values is called abundance. 

// let n = Number(prompt(`Number`))
// let copy = n
// let  sum_of_divisors = 0 

// for (i =1 ;  i < n ; i++) {
//     if (copy%i === 0){
//         sum_of_divisors += i
//     }
// }

// if (sum_of_divisors > n){
//     console.log(`its a abundent number`);
    
// }else{
//     console.log(`its not a abundent number`);
// }




//////////Q.perfect square 
// let num = Number(prompt('Enter a number'))
//     let flag = 0
//     for (let i = 1; i <= num; i++){
//         if(i * i == num){
//             flag++
//             break;
//         }
//     }
//     if( flag == 1){
//         console.log(num +' is a perfect square');
//     }
//     else{  
//         console.log(num +' is not a perfect square');
//     }





/////Q.Fibonaaci series by loop

// let n = Number(prompt("Enter a number:"));

// if (n >= 0) {
//     if (n === 0) {
//         console.log(0);
//     } else if (n === 1) {
//         console.log(0);
//         console.log(1);
//     } else {
//         let lastfib2 = 0; 
//         let lastfib1 = 1; 
//         console.log(lastfib2); 
//         console.log(lastfib1); 
//         for (let i = 2; i < n; i++) {
//             let nextFib = lastfib1 + lastfib2;
//             console.log(nextFib); 
//             lastfib2 = lastfib1; 
//             lastfib1 = nextFib;
//         }
//     }
// } else {
//     console.log("Please enter a non-negative number.");
// }






//////Q. Write a program to calculate the area of a
// circle, rectangle, and triangle using a switch statement

// let shape = prompt("Enter shape (circle/rectangle/triangle):").toLowerCase();

// switch(shape){
//     case "circle" :
//         let radius = Number(prompt("Enter radius of the circle:"));
//         let area = Math.PI * radius * radius;
//         console.log("Area of the circle is: " + area);
//         break;
//     case "rectangle" :
//         let length = Number(prompt("Enter length of the rectangle:"));
//         let width = Number(prompt("Enter width of the rectangle:"));
//         let ar = length * width;
//         console.log("Area of the rectangle is: " + ar);
//         break;
//     case "triangle" :
//         let base = Number(prompt("Enter base of the triangle:"));
//         let height = Number(prompt("Enter height of the triangle:"));
//         let are = (base * height) / 2;
//         console.log("Area of the triangle is: " + are);
//         break;
//     default :
//     console.log("Invalid shape. Please enter circle, rectangle, or triangle.");
// }


/////////////Q.A neon number is a number where the sum of digits
 //of the square of the number is equal to the number. 
// Input  : 9
//Output : Given number  9 is Neon number

//Explanation : square of 9=9*9=81;
//            sum of digit of square : 
//            8+1=9(which is equal to given number)


// let n  = Number (prompt ("Number to find its a Neon number"))

// let sum = 0

// let square = n*n
// let copyofsquare = square
// while (copyofsquare >0) {
//     let lastdigit = copyofsquare % 10
//     sum += lastdigit
//     copyofsquare = Math.floor(copyofsquare / 10)
// }


// if(sum === n){
//     console.log(n + " is a Neon number")
// }else{
//     console.log(n + " is not a Neon number")
// }







////////////Q.13.For a given positive integer N, the purpose is to find the
// value of F2 + F4 + F6 +………+ F2n till N number.
// Where Fi indicates the i’th Fibonacci number.
//   Input: n = 4
//Output: 33
//N = 4, So here the fibonacci series will be produced from 0th term till 8th term:
//0, 1, 1, 2, 3, 5, 8, 13, 21
//Sum of numbers at even indexes = 0 + 1 + 3 + 8 + 21 = 33.

//Input: n = 7
//Output: 609
// 0 + 1 + 3 + 8 + 21 + 55 + 144 + 377 = 609.



// let n = Number(prompt("Enter a number:"));
// let sum = 0;

// if (n >= 0) {
//     if (n === 0) {
//         sum = 0; 
//     } else {
//         let lastfib2 = 0; // F0
//         let lastfib1 = 1; // F1
//         let fib = 0;      // Current Fibonacci number

//         for (let i = 2; i <= n * 2; i++) { 
//             fib = lastfib1 + lastfib2; // Calculate the next Fibonacci number
            
//             if (i % 2 === 0) { // Check if the index is even
//                 sum += fib;
//             }
            
//             lastfib2 = lastfib1; // Update the last two Fibonacci numbers
//             lastfib1 = fib;
//         }
//     }

//     console.log(`The sum of Fibonacci numbers at even indexes up to F${n * 2} is ${sum}`);
// } else {
//     console.log("Please enter a non-negative number.");
// }















// Array : it is a data structure

//37. sum of elements of array

// let a = []
// let size = Number(prompt("size of array"))
// let sum = 0
// for (let i = 0 ; i<size ; i++){
//     a[i] = Number(prompt(`Enter element ${i+1}`))
//     sum += a[i]
// }

// console.log(a , sum );

// 38. greatest value of array

// let a = [1,23,4 ,4,5,6,7,123,456]

// let max = a[0]

// for (let i = 1 ; i<a.length ; i++){
//     if(a[i] > max){
//         max = a[i]
//     }
// }

// console.log(max);
