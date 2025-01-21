//Q. rverse a number
// function reverse(n, rev = 0) {
//     if (n === 0) return rev;  // Base case: return accumulated reverse
//     return reverse(Math.floor(n / 10), rev * 10 + (n % 10));
// }

//Q.fibo sum tll nth term
// function fibosum(n){
//     if(n==0 || n==1 ) return n
//     return fibosum(n-1)+fibosum(n-2)
// }

// console.log(fibosum(5));


//Q.reverse the digits of a numbers


// function reverser(n) {
//     let rev = 0; // Declare rev separately

//     function reverse(n) {
//         if (n === 0) return rev; // Base case
//         rev = rev * 10 + (n % 10); // Update rev
//         return reverse(Math.floor(n / 10)); // Recursive call
//     }

//     return reverse(n); // Start recursion
// }

// console.log(reverser(123));  // Output: 321
// console.log(reverser(4567)); // Output: 7654
// console.log(reverser(8900)); // Output: 98



//Q.fibonacci till nth term of fibonacci series
// function fibo(n){
//     if(n==0 ||n==1) return n
//     return fibo(n-1)+fibo(n-2)
// }

// console.log(fibo(8));


//Q. print fibo series till nth term 
// function fibonacci(n) {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// function printFibonacci(n) {
//     if (n <= 0) return;  // Base case: Stop when n is 0 or less
//     printFibonacci(n - 1);  // Recursive call to handle the previous Fibonacci numbers
//     console.log(fibonacci(n - 1));  // Print the Fibonacci number at index n-1
// }

// printFibonacci(7);  // Output: 0 1 1 2 3 5 8
