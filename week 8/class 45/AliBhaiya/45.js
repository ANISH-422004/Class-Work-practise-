// let arr = [
//     [1, 2, 3],
//     [1, 2, 3, 4, 5],
//     [0, 1]
// ];

// for (let i = 0; i < arr.length; i++) {
//     console.log(i+"th","row");
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]); 
//     }
  
    
// }




// let rows = 4 ,cols = 5
// let arr = Array.from({length:rows},()=>Array(cols).fill(0))

// for (let i = 0; i < arr.length; i++) {
//     console.log(i+"th","row");
//     for (let j = 0; j < arr[i].length; j++) {
//         arr[i][j] =i+j; 
//         console.log(arr[i][j]); 
//     }
  
    
// }
// console.log(arr);





// let rows = 4 ,cols = 5
// let arr = Array.from({length:rows},()=>Array(cols).fill(0))

// for (let i = 0; i < arr.length; i++) {
//     console.log(i+"th","row");
//     for (let j = 0; j < arr[i].length; j++) {
//         arr[i][j] = Number(prompt("enter a number : ")); 
//         console.log(arr[i][j]); 
//     }
  
    
// }
// console.log(arr);



// jagged Array:::::::::::::::::::::::;
// let arr  = new Array(Number(prompt("enternumberof rows")))

// for (let i = 0; i < arr.length; i++) {
//     arr [i ] = new Array(Number(prompt(`number of col elemem for ${i}th row `)))
//     for (let j = 0 ; j<arr[i].length  ; j++){
//         arr[i][j] = Number(prompt("enter number for the cols of your row "))
//     }
  
    

// }

// console.log(arr);




/// Diagonal sum :

// let arr = [
//     [4,2,3],
//     [2,3,4],
//     [3,4,5]
// ]

// let lds=0 //piramary diagonal
// let rds = 0  // secondary diagonal
// for(let i = 0 ; i<arr.length; i++){
//     for(let j = 0 ; j<arr[i].length; j++){
//             if(i==j){
//                 lds+=arr[i][j]
//             }
//             if(i+j==arr.length-1){
//                 rds+=arr[i][j]
//             }
//     }
    
        
// }

// console.log("lds",lds,"rds",rds);
