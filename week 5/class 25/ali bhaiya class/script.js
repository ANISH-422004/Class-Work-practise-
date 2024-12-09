

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

//process.stdout.write() VS  Console.log() 
// process.stdout.write : its a function which prints out the results without new lines and ontheotherhand console.log() prints the results with new line          


//Q36. pattern v
// let n = 4
// *     *
//  *   *
//   * *
//    *

// let n = 5

// for (let i = 1 ; i<=n ; i++){
//     let pof = ''
//     for (let j=1 ; j<=n*2-1 ; j++){
//         if(j===i || i+j===2*n){
//             pof += '*'
//         }
//         else{
//             pof += ' '
//         }
//     }
//     console.log(pof)
// }



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

// let n =  5 // alaways will be an odd numver 
// for (let i = 1 ; i<=5 ;i++){
//     for(let j = 1  ; j<=5 ; j++){
//         if(i===j || i+j === n+1){
//             process.stdout.write('* ')
//         }
//         else{
//             process.stdout.write('  ')
//         }
        
//     }
//     console.log()
// }




//////Q37.