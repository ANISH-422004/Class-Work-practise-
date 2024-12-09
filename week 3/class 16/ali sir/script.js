//Q21. Reverse the Number


// let n = Number(prompt("enter a number"));
// let copy = n
// let rev = 0 ;
     
// while(n>0){
//     ld = n%10;
//     rev = rev*10 +ld
//     n = Math.floor(n/10)
// }
// console.log(`${copy} ka reverse ${rev} hai`)

//Q22. palindrome number or not

// let num = 121;
// let temp = num;
// let rev = 0;
// while(num>0){
//     ld = num%10;
//     rev = rev*10 + ld;
//     num = Math.floor(num/10);
// }

// console.log(temp==rev ? "palindrome" : "not palindrome")


//Q23. strong number or not
//strong number is a number in which the sum of the factorial of its digits is equal to the number itself. 
//approach is to find the factorial of each digit and then add them and check if the sum is equal to the number itself
//for example 145 is a strong number because 1! + 4! + 5! = 1 + 24 + 120 = 145


// function factorial(n){
//     let fact = 1;
//     for(let i=1; i<=n; i++){
//         fact = fact*i;
//     }
//     return fact;
// }

// n =  145;
// original = n;
// sum = 0;
// while(n>0){
//     ld = n%10;
//     sum = sum + factorial(ld);
//     n = Math.floor(n/10);
// }   

// console.log(original==sum ? "strong" : "not strong")


//Q24. Automorphic number or not
//A number is called an Automorphic number if and only if its square ends in the same digits as the number itself.

// function isAutomorphic(n) {
//     let copy = n;
//     let sq = n * n;
    
//     let count = 0;
//     while(n > 0) {
//         count++;
//         n = Math.floor(n/10);
//     }
    
//     return sq % Math.pow(10, count) === copy;
// }

// // Example usage:
// console.log(isAutomorphic(625) ? "Automorphic" : "not Automorphic");





//Q25. sum of digits until the number becomes a single digit

//logic is if the number is 0 then make the number as sum and sum as 0 and continue the loop until the number is 0 or sum is greater than 9 and if the number is 0 then make the number as sum and sum as 0  


// let n = 12345;
// let copy = n;
// let sum = 0;
//  while(n>0 || sum>9){
//     if(n==0){
//         n = sum;
//         sum = 0;
//     }
//     rem = n%10;
//     sum = sum + rem;
//     n = Math.floor(n/10);
//  }

//  console.log(sum)


// by functional approach Q25.
// n= 5798
// sum = 0;
// function sumOfDigits(n){
//     let sum = 0;
//     while(n>0){
//         sum = sum + n%10;
//         n = Math.floor(n/10);
//     }
//     return sum;
// }

// while(n>9){
//     sum = sumOfDigits(n);
//     n = sum;
// }
// console.log(sum)



//Q26. Fibonacci series
//write a program to print the fibonacci series up to n terms
//fibonacci series is a series in which each number is the sum of the two preceding ones
//for example 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// let n = 6;
// let a = 0;
// let b = 1;

// // Only print first number if n=1
// if (n >= 1) console.log(a);
// // Print second number if n>=2
// if (n >= 2) console.log(b);
// // Print remaining numbers
// for (let i = 2; i < n; i++) {
//     let c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
// }


//Q27. repeated hellow : write a program that repeatedly prints "hello" until user provides incorrect input using do while loop
// let n = 1 
// do {
//     console.log("hello");
//     console.log('press 1 to repeat')
//     p = Number(prompt("number"))
    
// }while(p===n){
//     console.log('press 1 to repeat');
    
// }
// console.log('program exit');
