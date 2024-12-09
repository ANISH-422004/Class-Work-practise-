/// CLASS 15 ALI SIR 

// Q14. ShopDiscount
//                  you are asked to creat a shop discount calculator
//                  you are given a product price and discount percentage
//                  you need to calculate the final price after discount
//                  0>=total price<=5000 then discount is 0
//                  5000<total price>=7000 then discount is 5%
//                  7000<total price>=9000 then discount is 10%
//                  9000<total price then discount is 20%


// let totalPrice = Number(prompt("enter the total price"));

// if (totalPrice >= 0 && totalPrice <= 5000){
//     console.log(`total payble amount is ${totalPrice}`);
    
// }

// if (totalPrice > 5000 && totalPrice <= 7000){
//     console.log(`total payble amount is ${totalPrice - (totalPrice * 0.05)}`);
// }

// if (totalPrice > 7000 && totalPrice <= 9000){
//     console.log(`total payble amount is ${totalPrice - (totalPrice * 0.1)}`);
// }
// if (totalPrice >9000){
//     console.log(`total payable amount is ${totalPrice - (totalPrice * 0.2)}`);
    
// }
// else{
//     console.log("invalid input");
// }


// //  // doing this with else if 


// if (totalPrice >= 0 && totalPrice <= 5000){
//     console.log(`total payble amount is ${totalPrice}`);
// }
// else if (totalPrice > 5000 && totalPrice <= 7000){
//     console.log(`total payble amount is ${totalPrice - (totalPrice * 0.05)}`);
// }   
// else if (totalPrice > 7000 && totalPrice <= 9000){
//     console.log(`total payble amount is ${totalPrice - (totalPrice * 0.1)}`);
// }
// else if (totalPrice > 9000){
//     console.log(`total payable amount is ${totalPrice - (totalPrice * 0.2)}`);
// }
// else{
//     console.log("invalid input");
// }

///////////////////// var discount for effective code 

// let discount = 0;

// if (totalPrice >= 0 && totalPrice <= 5000){
//     discount = 0;
// }
// else if (totalPrice > 5000 && totalPrice <= 7000){
//     discount = 0.05;
// }                   
// else if (totalPrice > 7000 && totalPrice <= 9000){
//     discount = 0.1;
// }
// else if (totalPrice > 9000){
//     discount = 0.2;
// }   
// else{
//     console.log("invalid input");
// }

// console.log(`total payable amount is ${totalPrice - (totalPrice * discount)}`);









// Q15. Electricity Bill
        // 0>=unit<=100 then 4.2 for first 100 unit
        // 100<unit<=200 then 6 for next 100 unit
        // 200<unit<=400 then 8 for next 200 unit
        // unit>400 then 13 for remaining unit



// let unit = Number(prompt("enter the unit"));
// let amount = 0;
// if (unit >= 0 && unit <= 100){
//     amount = unit * 4.2;
// }
// else if (unit > 100 && unit <=200){   
//     amount = 100*4.2 + (unit - 100)*6;
// }
// else if (unit > 200 && unit <= 400){
//     amount = 100*4.2 + 100*6 + (unit - 200)*8       ;
// }
// else if (unit > 400){
//     amount = 100*4.2 + 100*6 + 100*8 + (unit - 400)*13  ;
// }
// else{
//     console.log("invalid input");
// }
// console.log(`total payable amount is ${amount}`);



  



/// ////bottom to top approach  efficient code ///////

////:::::::: Explanation of the Code Logic ::::::::::::
// The given code calculates the electricity bill based on a tiered pricing system. It uses a bottom-to-top approach, starting from the highest range of units and progressively reducing the units while calculating the cost for each range.

// Step-by-Step Logic
// Initialize Variables:

// unit is the number of electricity units consumed.
// amount starts at 0 and will accumulate the total payable amount.

// Top-Tier Check:

// If the units exceed 400, the excess units (above 400) are billed at 13 per unit, and those units are removed from further calculation (unit is reduced to 400).
// Second-Tier Check:

// If the units are between 201 and 400, the units in this range (above 200) are billed at 8 per unit, and those units are removed (unit is reduced to 200).
// Third-Tier Check:

// If the units are between 101 and 200, the units in this range (above 100) are billed at 6 per unit, and those units are removed (unit is reduced to 100).
// Base Tier Check:

// If the remaining units are 100 or less, all these units are billed at 4.2 per unit.
// Finally, the total calculated amount is displayed.


// let unit = Number(prompt("enter the unit")); //700 -  300 = 400 
// let amount = 0;  

// if (unit > 400){ //300
//     amount  = (unit - 400) * 13;
//     unit = 400; 
// }
// if (unit > 200 && unit <= 400){
//     amount = amount + (unit - 200)*8;
//     unit = 200;
// }
// if (unit > 100 && unit <= 200){
//     amount = amount + (unit - 100)*6;
//     unit = 100;
// }
// if (unit <= 100){
//     amount = amount + unit * 4.2;
// }
// console.log(`total payable amount is ${amount}`);








// Q15. Ntimes hellow world 
    // you are asked to print hello world n times 
    // OP : hello world
    // hello world
    // hello world .
    // .
    // .
    // .
    // n times 


// n =  Number(prompt("enter the number"));

// for (let i = 0; i < n; i++){
//     console.log("hello world");
// }





//Q16.  N natural number 
    // you are asked to print first n natural number 
    // OP : 1 2 3 4 5 6 7 8 9 10 



// n = Number(prompt("enter the number"));
// str = ``
// for (let i = 1; i <= n; i++){
//     str += `${i} `; // // or str =  str + i + " "
// }
// console.log(str);






//Q17. Sum of N natural number 
    // you are asked to print sum of first n natural number 
    // OP : 1+2+3+4+5+6+7+8+9+10 = 55

// n =  Number(prompt("enter the number"));
// sum = 0 ;
// for (let i  = 1 ; i <= n; i++){
//     sum += i;
// }
// console.log(`sum of first ${n} natural number is ${sum}`);






// Q18. Factorial of number N 

// n = Number(prompt("enter the number"));
// fact =  1 ;
// for (let i =1 ;  i <= n ; i++){
//     fact =  fact * i;
// }
// console.log(`factorial of ${n} is ${fact}`);







// Q19. Prime number
// write a program to check if a number is prime or not 

// let n  = Number(prompt("enter the number"));
// let countoffactor = 0;


// if (n === 1){
//     console.log(`${n} is not a prime number`);
// }
// else{
//     for (let i = 2; i <= n/2; i++){ // why n/2 ? ans : this is because for any number  n , any factor greater than n/2 (other than n itself) cannot divide n evenly.
//         if (n % i === 0){
//             countoffactor++;
//            }
    
//     }
//     if (countoffactor === 0){
//         console.log(`${n} is a prime number`);
//     }
//     else{
//         console.log(`${n} is not a prime number`);
//     }
    
// }





//Q20. find sum of digit of number N 

// let n = Number(prompt("enter the number"));
// let sum = 0;
// var initialN = n;  // Store initial value

// while(n > 0) {
//     let lastdigit = n % 10;
//     sum = sum + lastdigit;
//     n = Math.floor(n/10);
// }
// alert(`sum of digit of number ${initialN} is ${sum}`);