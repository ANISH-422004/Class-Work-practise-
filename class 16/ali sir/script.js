//Q21. Reverse the Number

// let n =  1234;
// let rev = 0
// while(n>0){
//     ld = n%10
//     rev= rev*10 + ld  
//     n = Math.floor(n/10)
// }

// console.log(rev)



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





//Q25. lsum of digits until the number becomes a single digit

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
