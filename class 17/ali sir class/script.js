//Q26. fibonacci series write a program to print the fibonacci series up to n terms 
//fibonacci series is a series in which each number is the sum of the two preceding one
//first 2 number a predefined thatis 0 and 1
//for example 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...


// n = 5 
// first = 0 
// second = 1 

// if (n<=0){
//     console.log('invalid input');
// }
// if (n>=1){
//     console.log(first);
// }
// if (n>=2){
//     console.log(second);
// }
// for (let i = 2; i < n; i++) {
//     let c = first + second;
//     console.log(c);
//     first = second;
//     second = c;
// }


//Q27. repeated hellow : write a program that repeatedly prints "hello" until user provides incorrect input using do while loop
//logic : 
//1. take a variable i and assign it to 1
//2. use do while loop to print hello and take input from user
//3. if user provides 0 then exit the loop
//4. if user provides any other number then repeat the loop



// let i 
// do{
//     console.log('hello');
//     console.log('press 1 to repeat');
//     i = Number(prompt('enter your choice'))
// }while(i!==0)

// console.log('program exit');





//Q28. write a program to creat a choise based calculator using do while and switch case
//logic : 
//1. take a variable i and assign it to 1
//2. use do while loop to print hello and take input from user
//3. if user provides 0 then exit the loop
//4. if user provides any other number then repeat the loop 

// let i 
// do {

//     console.log('choise based calculator');
//     console.log('1. addition');
//     console.log('2. subtraction');
//     console.log('3. multiplication');   
//     console.log('4. division');

//     let choice = Number(prompt('enter your choice'))    
    
//     if (choice <1 || choice >4){
//         // console.log('program exit');
//         break;
//     }
    
//     else{

//     switch (choice) {
//         case 1:
//             let num1 = Number(prompt('enter first number'))
//             let num2 = Number(prompt('enter second number'))
//             console.log(`${num1} + ${num2} = ${num1 + num2}`);
//             break;
//         case 2:
//             num1 = Number(prompt('enter first number'))
//             num2 = Number(prompt('enter second number'))
//             console.log(`${num1} - ${num2} = ${num1 - num2}`);
//             break;
//         case 3:
//             num1 = Number(prompt('enter first number'))
//             num2 = Number(prompt('enter second number'))
//             console.log(`${num1} * ${num2} = ${num1 * num2}`);
//             break;
//         case 4:
//             num1 = Number(prompt('enter first number'))
//             num2 = Number(prompt('enter second number'))
//             console.log(`${num1} / ${num2} = ${num1 / num2}`);
//             break;
//         default:
//             console.log('invalid choice');
//             break;
//     }   
// }
//     i = Number(prompt('press any number to continue or 0 to exit'))
// }while(i!==0)
// console.log('program exited');



//Q29. Guess the number game : write a program that generates a random number and asks the user to guess it.
// if the guess is correct then print "you win" and exit the program
// if it greater than the random number then print "too high" and ask the user to guess again
// if it is less than the random number then print "too low" and ask the user to guess again
// the user has unlimited chances to guess the number
// if the user fails to guess the number then print "you lose" and exit the program

// // Generate a random number between 1 and 100
// const target = Math.floor(Math.random() * 100) + 1;
// console.log(target);

// let guess = 0; // Variable to store the user's guess

// // Start the guessing loop
// while (guess !== target) {
//   // Prompt user for their guess
//   guess = parseInt(prompt("Guess the number (1-100):"), 10);

//   // Compare the guess with the target number
//   if (guess === target) {
//     alert("Congrats! You guessed the correct number.");
//   } else if (guess > target) {
//     alert("Too high, try again.");
//   } else {
//     alert("Too low, try again.");
//   }
// }



///Using Do while Loop