///////// Q. find the last occurance of an element X in given array

// function lastseenidx (arr,n){
//     let idx = -1
//     for (i=0 ; i<arr.length ; i++){
//         if (arr[i]=== n ){
//             idx = i
//         }

//     }
//     return idx
// }

// console.log(lastseenidx([1,2,3,4,51,23,1,2,3,4,5,1,1,2,1,2,3,5],1));



///////// Q. check if arr is sorted or not 



// function isSorted(arr){
//     for (i=0 ; i<arr.length ; i++){
//         if (arr[i]>arr[i+1]){
//             return false
//         }
//     }
//     return true
// }   

// console.log(isSorted([1,2,3,4,5,6,7,8,9,10]));

//for decreasing order

// function isSortedDecreasing(arr){
//     for (i=0 ; i<arr.length ; i++){
//         if (arr[i]<arr[i+1]){
//             return false
//         }
//     }
//     return true
// }

// console.log(isSortedDecreasing([10,9,8,7,6,5,4,3,2,1]));

//  both in single function

// function isSortedBothWay(arr) {
//     let isIncreasing = true;
//     let isDecreasing = true;

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             isIncreasing = false;
//         }
//         if (arr[i] < arr[i + 1]) {
//             isDecreasing = false;
//         }
//     }

//     return isIncreasing || isDecreasing;
// }

// console.log(isSortedBothWay([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // true
// console.log(isSortedBothWay([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // true
// console.log(isSortedBothWay([1, 3, 2, 4, 5])); // false



//lect no 17

///////// Q.
