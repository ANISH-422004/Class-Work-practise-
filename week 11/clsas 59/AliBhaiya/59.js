// Q. print n time hellow 


// function print(n) {
//     if (n <= 0) return;  // Base case to stop recursion
//     console.log("hellow");
//     print(n - 1);  // Recursive call
// }

// print(5);

// Q.print till n to 1
// function PrintNumbers(n) {
//     if(n<=0) return 
//     console.log(n)
//     PrintNumbers(n-1)
    
// }
// PrintNumbers(10)


// Q.print till 1 to n

function PrintNumbers(n){
    
    if(n<0) return 
    PrintNumbers(n-1)
    console.log(n)
    

    
}
console.log(PrintNumbers(5));




