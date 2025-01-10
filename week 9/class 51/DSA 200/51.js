// 1.reverse a string 

// let s = "anish"
// let rev = ""
// for (let i  = s.length-1 ; i>=0 ; i--){
//     rev+=s[i]
// }
// console.log(rev);


//2.check if irts a pliandrom or not 
// let s = "madam"
// let rev = ""
// for (let i  = s.length-1 ; i>=0 ; i--){
//     rev+=s[i]
// }

// if (rev==s) {
//     console.log("Plaindrom");
    
// } else {
//     console.log("NotPlaindrom");
    
// }


//2pointer 
// let s = "madefdam"
// let f = 0
// let l = s.length-1
// let p = true
// while(f<l){
//     if(s[f]!=s[l]) {
//         p=!p
//         break
//     }
//     f++
//     l--
// }
// if (p) {
//     console.log("palindorm");
    
// } else {
    
//     console.log("Not_palindorm");
// }


//3.MAX AND MIN in a Array 
// let arr = [1,2,3,5,6,73,-1,2,-40]
// let max= -Infinity
// let min = +Infinity
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>max) {
//         max= arr[i]
//     }
//     if (arr[i]<min) {
//         min =  arr[i]
//     }
    
// }

// console.log(`max=${max},min=${min}`);


//4.Create Fuction that removes duplicates form an array modify the new array dont take extra space 
// let arr = [1,2,3,4,51,2,3,4,5,2,3,4,5,2,4,]
// let s = new Set(arr)
// arr = [...s]
// console.log(arr);



/// 5.Leetcode 26 :
// var removeDuplicates = function(nums) {
//     let j = 0 
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]!=nums[j]){
//             j++
//             nums[j]=nums[i]
//         }
//     }
//     return j+1
// };



//6.letcode 242 valid anagram : 

// var isAnagram = function(s, t) {
//     arr1 = new Array(26).fill(0)
//     arr2 = new Array(26).fill(0)
//     if(s.length!=t.length) return false 
//     else {
//         for (let i = 0 ; i < s.length ; i++){
//             arr1[s.charCodeAt(i)-97]+=1    
//             arr2[t.charCodeAt(i)-97]+=1    
//         }
    
        
//         for(j=0 ; j<arr1.length ; j++){
//             if(arr1[j]!=arr2[j]) return false
//         }
    
//         return true
//     }

// };
// console.log(isAnagram("anish","nisha"))



//7.leetcode: mergesorted array 










/// 8.factoraial using Recursion 

// function factorial(n) {

//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }


// console.log(factorial(5)); // Output: 120



//9.
//       let isPrime = (n) => {
//     if (n <= 1) return false; // 1 is not prime, and negative numbers aren't prime
//     if (n === 2) return true;  // 2 is the smallest prime number

//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) return false; // If n is divisible by any i, it's not prime
//     }
    
//     return true; // If no divisors were found, it's prime
// };

// console.log(isPrime(4)); // Output: false
// console.log(isPrime(7)); // Output: true






//// 10. create a fun to generate fib squence up to given number 

// function generateFibonacci(n) {
//     if (n <= 0) return []; // If n is less than or equal to 0, return an empty array
//     if (n === 1) return [0]; // If n is 1, return [0]
    
//     let fibSequence = [0, 1]; // Initialize the sequence with the first two numbers
    
//     while (true) {
//         let nextNumber = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
//         if (nextNumber > n) break; // Stop if the next number exceeds n
//         fibSequence.push(nextNumber); // Add the next number to the sequence
//     }
    
//     return fibSequence;
// }

// // Example usage
// console.log(generateFibonacci(21)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
