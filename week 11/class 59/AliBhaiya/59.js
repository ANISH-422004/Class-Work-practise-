// Q. print n time hellow 


// function print(n) {
//     if (n === 0) return;  // Base case to stop recursion
//     console.log("hellow");
//     print(n - 1);  // Recursive call
// }

// print(5);

// Q.print till n to 1
// function PrintNumbers(n) {
//     if(n===0) return 
//     console.log(n)
//     PrintNumbers(n-1)
    
// }
// PrintNumbers(10)



//Q.print 1 to n numbers
// function PrintNumbers(n) {
//     if (n === 0) return;  // Base condition to stop at 0

//     PrintNumbers(n - 1);  // Recursive call first (smaller problem)
//     console.log(n);  // Print after the recursive call (ensures ascending order)
// }

// PrintNumbers(5);



//Q.finm sum of n natural numbers till 1 to n
// function sumOfNaturalNumbers(n) {
//     if (n === 0) return 0;  

//     return n + sumOfNaturalNumbers(n - 1);  
// }

// console.log(sumOfNaturalNumbers(5));  

// sumOfNaturalNumbers(5)
// = 5 + sumOfNaturalNumbers(4)
// = 5 + (4 + sumOfNaturalNumbers(3))
// = 5 + (4 + (3 + sumOfNaturalNumbers(2)))
// = 5 + (4 + (3 + (2 + sumOfNaturalNumbers(1))))
// = 5 + (4 + (3 + (2 + (1 + sumOfNaturalNumbers(0)))))
// = 5 + (4 + (3 + (2 + (1 + 0))))  // Base case returns 0
// = 5 + (4 + (3 + (2 + 1)))
// = 5 + (4 + (3 + 3))
// = 5 + (4 + 6)
// = 5 + 10
// = 15


//Q find factorial of n 
// function factorial(n) {
//     if (n === 0 || n === 1) return 1;  // Base case: 0! and 1! = 1

//     return n * factorial(n - 1);  // Recursive call
// }

// console.log(factorial(5));  // Output: 120

//Q.sum of digits
// function sumOfDigits(n) {
//     if (n === 0) return 0;  // Base case: If n becomes 0, return 0

//     return (n % 10) + sumOfDigits(Math.floor(n / 10));  // Recursive call
// }

// console.log(sumOfDigits(1234));  // Output: 10 (1+2+3+4)
