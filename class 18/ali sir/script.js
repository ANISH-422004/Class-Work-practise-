

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
// let target = Math.floor(Math.random() * 100) + 1;
// let guess = 0;
// do{
//     guess = parseInt(prompt("Guess the number (1-100):"), 10);
//     if(guess === target){
//         alert("Congrats! You guessed the correct number.");
//     }else if(guess > target){
//         alert("Too high, try again.");
//     }else{
//         alert("Too low, try again.");
//     }
// }while(guess !== target)




//Q30. Pattern right angle triangle

// let n = 5 
// for (i=1 ; i<=n ; i++){
//     let patternforline = ""
//     for (j=1 ; j<=i ; j++){
//         patternforline += " *"
//     }
//     console.log(patternforline)
// }








//Q31. Pattern right angle triangle (Number)
//  let n =5 
//  for (i=1 ; i<=n; i++){
//     let num = 1 
//     let patternforline = ""
//     for (let j = 1 ; j<=i ; j++){
//         patternforline += num + " "
//         num++
//     }
//     console.log(patternforline)
//  }








//Q32. Pattern right angle triangle (Alphabet)

// let arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

// let n = 5
// if (1<= n <= 26){
//     for (var i = 1 ; i<=n  ; i++){ // no of lines
        
//         let patternforline = ""
//         for (var j = 0 ; j<i ;j++){ // no of elements in each line
//             patternforline += arr[j] + " "
//         }
//         console.log(patternforline)
//     }
// }
// else{
//     console.log("Invalid Input")
// }

// BY ascii value char.charCodeAt()

// let n = 5
// if (1<=n && n<=26){
//     for (var i=1 ; i<=n ; i++){
//         let ascii = 64
//         let patternforline = ""
//         for (var j=1 ; j<i ; j++){
//             patternforline += String.fromCharCode(64+j) + " "
//             ascii++
//         }
//         console.log(patternforline)
//     }
// }
// else{
//     console.log("Invalid Input")
// }






//Q33. Inverted right angle triangle with star

// let n =  Number ( prompt("Enter the number of lines"))
// for ( var i=0 ; i<n ; i++){ // no of lines
//     let pof = ''
//     for (var j= 0 ; j<n-i ; j++){
//         pof += "*" + " "

//     }
//     console.log(pof)
// }


//Q34. Mirror image of right angle triangle with star
//     *
//    **
//   ***
//  ****
// *****

// let n = 5
// for (var i = 1; i <= n; i++) {          // Controls number of rows
//     let pof = ''
//     for (var j = 1; j <= n - i; j++) {  // Controls leading spaces
//         pof += " "
//     }
//     for (var k = 1; k <= i; k++) {      // Controls stars
//         pof += "*"
//     }
//     console.log(pof)
// }



//Q35. triangle with star
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

// let n = 5
// for (var i=0 ; i<n ; i++){
//     let pof = ''
//     for (var j=0 ; j<n-i ; j++){
//         pof += " "
//     }
//     for (var k=0 ; k<i ; k++){
//         pof += "*" + " "
//     }
//     console.log(pof)
// }   




//Q36. pattern v
// let n = 4
// *     *
//  *   *
//   * *
//    *



//Q37. pattern x
// *               *
//   *           *  
//     *       *
//       *   *
//         *
//       *    *
//     *        *
//   *            *
// *                *






//Q37. Sum of Array Elements
// Write a program that accepts the size of an array n from the user, creates an array nums of size n, takes n inputs into the array, and then prints the sum and mean of all elements.

// let n = Number(prompt("Enter the size of the array"))
// let numx = []
// for (var i=0 ; i<n ; i++){
//     numx.push(Number(prompt("Enter the element")))
// }
// let sum = 0
// for (var i=0 ; i<numx.length ; i++){
//     sum += numx[i]
// }
// console.log(`Sum of the array is ${sum}`)
// console.log(`Mean of the array is ${sum/n}`)


//Q38. Greatest in Array
// Write a program to find the greatest element in a given array and print its index.

// let n = Number(prompt("Enter the size of the array"))
// let numx = []
// for (var i=0 ; i<n ; i++){
//     numx.push(Number(prompt("Enter the element")))
// }
// console.log(numx)

// let max = numx[0]
// for (var i=0 ; i<numx.length ; i++){
//     if (numx[i] > max){
//         max = numx[i]
//     }
// }
// console.log(`Greatest element in the array is ${max}`)


//Q39.Second Greatest in Array
//Create a program to find the second greatest element in a given array.

// let n = Number(prompt("Enter the size of the array"))
// let numx = []
// for (var i=0 ; i<n ; i++){
//     numx.push(Number(prompt("Enter the element")))
// }
// console.log(numx)


// let max = numx[0]
// let secondlastmax = numx[0]
 
// for (var i = 0 ; i<numx.length ; i++){
//     if (numx[i] > max){
//         secondlastmax = max
//         max = numx[i]
//     }
// }
// console.log(`Second greatest element in the array is ${secondlastmax}`)

 
//Q40. Is Array Sorted?
// Write a program to check if an array is sorted in ascending order.

// let n = Number(prompt("Enter the size of the array"))
// let numx = []
// for (var i=0 ; i<n ; i++){
//     numx.push(Number(prompt("Enter the element")))
// }
// console.log(numx)


// let last = numx[0]
// let next = numx[0]

// for (var i=0 ; i<numx.length ; i++){
//     last  = next
//     next = numx[i+1]
//     if (last > next){
//         console.log("Array is not sorted")
//         break
//     }
// }
// console.log("Array is sorted")


