
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


// function LCM(a, b) {
//     let c = b

//     while (c >= b) {
//         if (c % a == 0 && c % b == 0) {
//             return (c)

//         }
//         c++
//     }

// }

// console.log(LCM(18,12));


//Q3.HCF

// let a = 48
// let b = 12
// for (i=b; i>0 ; i--){
//     if(a%i===0 && b%i===0){
//         console.log("HCF"+" "+i)
//         break;
//     }
// }


// Q4. Hailstone numbers
// let n = Number(prompt("enter Number : "))
// let n = 7;
// console.log(n);  // Print the initial number

// while (n > 2) {
//     if (n % 2 === 0) {
//         n = n / 2;
//     } else {
//         n = 3 * n + 1;
//     }
//     console.log(n);  // Print the number after each transformation
// }


//Q5.

// let options = alert(
//     "1. Check if it's even or odd\n2. Check if it's a prime\n3. Calculate factorial\n4. Exit"
// );
// let choice = Number(prompt("Enter Your Choice"));

// switch (choice) {
//     case 1:
//         let num1 = Number(prompt("Enter Your Number"));
//         console.log(EorO(num1));
//         break;

//     case 2:
//         let num2 = Number(prompt("Enter Your Number"));
//         console.log(isPrime(num2));
//         break;

//     case 3:
//         let num3 = Number(prompt("Enter Your Number"));
//         console.log(fact(num3));
//         break;

//     case 4:
//         console.log("Program finished");
//         break;

//     default:
//         console.log("Invalid input");
// }

// function EorO(n) {
//     if (n % 2 === 0) {
//         return "Even";
//     }
//     return "Odd";
// }

// function isPrime(n) {
//     if (n <= 1) return "Not Prime"; // Handle numbers <= 1
//     for (let i = 2; i <= Math.sqrt(n); i++) { // Optimize by checking up to √n
//         if (n % i === 0) {
//             return "Not Prime";
//         }
//     }
//     return "Prime Number";
// }

// function fact(n) {
//     if (n < 0) return "Factorial not defined for negative numbers"; // Handle negatives
//     let fact = 1;
//     for (let i = 1; i <= n; i++) {
//         fact *= i;
//     }
//     return fact;
// }



///////////////////// TASK3

// Q1. find max number of 1 appers consucutevy in a binary array
// let nums = [1,1,0,1,1,1]
// let count =0
// let max= 0
// for (let i=0;i<nums.length;i++){
//     if(nums[i]===1){
//         count++
//     }else{
//         max= Math.max(count,max)        
//         count = 0
//     }
// }
// max= Math.max(count,max)

// console.log(max);





//Q2.find the freq of each number in the array 

// let nums = [1,5,3,1,3,5,6]
// let freq={}

// for (let i = 0 ; i<nums.length ; i++){
//     if (freq[nums[i]] in freq){
//         freq[nums[i]]+=1
//     }else{
//         freq[nums[i]] =1   
//     }
// }
// console.log(freq);






/// Devleopres approach 
// let nums = [1, 5, 3, 1, 3, 5, 6];
// let uniqueNums = new Set(nums); // Create a Set to store unique elements

// // Output the frequency of each unique element
// for (let num of uniqueNums) {
//     let count = nums.filter(x => x === num).length; // Count occurrences of the element
//     console.log(`${num} - ${count}`);
// }

// by set approct to much un optimised


// let nums = [1, 5, 3, 1, 3, 5, 6];
// let uniqueNums = new Set(nums); // Create a Set to store unique elements


// for (let num of uniqueNums) {  //n unique elems
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {  //m no of tot elem 
//         if (nums[i] === num) {
//             count++;
//         }
//     }
//     console.log(`${num} - ${count}`);
// }


//timecomplexity O(m*n)



//Q3.
// function findThirdLargest(arr) {
//     if (arr.length < 3) {
//         return "Array doesn't have 3 elements";
//     }
    
//     let first = -Infinity, second = -Infinity, third = -Infinity;
    
//     for (let num of arr) {
//         if (num > first) {
//             third = second;
//             second = first;
//             first = num;
//         } else if (num > second && num !== first) {
//             third = second;
//             second = num;
//         } else if (num > third && num !== second && num !== first) {
//             third = num;
//         }
//     }
    
//     return third === -Infinity ? "Array doesn't have 3 unique elements" : third;
// }

// // Example usage
// let arr = [12, 13, 5, 7, 3, 13, 8, 12];
// console.log(findThirdLargest(arr));  // Output: 8


// Q4.

// function balanceArray(arr) {
//     let leftWeight = 0;
//     let rightWeight = 0;
  
 
//     for (let i = 0; i < arr.length / 2; i++) {
//       leftWeight += arr[i];
//     }
//     for (let i = arr.length / 2; i < arr.length; i++) {
//       rightWeight += arr[i];
//     }
  
//     if (leftWeight === rightWeight) {
//       return "Array is balanced";
//     } else if (leftWeight < rightWeight) {
//       return `Add ${rightWeight - leftWeight} to the left side`;
//     } else {
//       return `Add ${leftWeight - rightWeight} to the right side`;
//     }
//   }


//   const arr = [1, 2, 1, 3];
//   const result = balanceArray(arr);
//   console.log(result); 