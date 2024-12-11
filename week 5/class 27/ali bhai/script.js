// An array is a sorted or not  for acceding 
// function isAssending(array){
//     let arr = [...array]
//     for (i=1 ; i<arr.length ; i++){
//         if (array[i-1] > array[i]) {
//             return "not sorted "
//             break
//         }

//     }
//     return "sored "
// }   

// console.log(isAssending([1,2,3,4,4,5])) // "sorted "



// An array is a sorted or not for deseding. 

    // function isDesending(array){
    //     let arr = [...array]
    //     for (i=1 ; i<arr.length ; i++){
    //         if (array[i-1] < array[i]) {
    //             return "not sorted "
    //             break
    //         }
    //     }
    //     return "sorted "
    // }    
    // console.log(isDesending([5,4,4,3,2,1])) // "sorted "

// left rotation array 

// let arr = [10,20,30,40,50]
// let temp = arr[0]

// for (let i=0 ; i<arr.length-1 ; i++){
//     arr[i] = arr[i+1]
// }

// arr[arr.length-1] = temp

// console.log(arr) // [20,30,40,50,10]


// right rotation arrary 
// let arr = [10,20,30,40,50]
// let temp = arr[arr.length-1]
// for ( i= arr.length-1 ; i>0 ; i-- ){
//     arr[i] = arr[i-1]
// }
// arr[0] = temp
// console.log(arr) //;






/// //////////////////////////////////left rotation by k times  by revaersal algorithm
// function leftRotate(arr, k) {
//     const n = arr.length;
//     k = k % n; // Handle cases where k > n

//     // Step 1: Reverse the first k elements
//     reverse(arr, 0, k - 1);

//     // Step 2: Reverse the remaining elements
//     reverse(arr, k, n - 1);

//     // Step 3: Reverse the entire array
//     reverse(arr, 0, n - 1);

//     return arr;
// }

// // Helper function to reverse a section of the array
// function reverse(arr, start, end) {
//     while (start < end) {
//         [arr[start], arr[end]] = [arr[end], arr[start]];
//         start++;
//         end--;
//     }
// }

// // Example usage:
// const array = [1, 2, 3, 4, 5, 6, 7];
// const k = 2;
// console.log(leftRotate(array, k)); // Output: [3, 4, 5, 6, 7, 1, 2]



/////////////////////////////////////////right rotation by k times by reversal algorithm 


// function rightRotate(arr, k) {
//     const n = arr.length;
//     k = k % n; // Handle cases where k > n

//     // Step 1: Reverse the entire array
//     reverse(arr, 0, n - 1);

//     // Step 2: Reverse the first k elements
//     reverse(arr, 0, k - 1);

//     // Step 3: Reverse the remaining n - k elements
//     reverse(arr, k, n - 1);

//     return arr;
// }

// // Helper function to reverse a section of the array
// function reverse(arr, start, end) {
//     while (start < end) {
//         [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
//         start++;
//         end--;
//     }
// }

// // Example usage:
// const array = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;
// console.log(rightRotate(array, k)); // Output: [5, 6, 7, 1, 2, 3, 4]

