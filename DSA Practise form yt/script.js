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

///////// Q.find total number of paris in array whose sun is equal to the given number

// function noofpair(arr , target){
//     let count =0 
//     for (i=0;i<arr.length;i++){
//         for (j=i+1;j<arr.length;j++ ){
//             if(arr[i]+arr[j]===target){
//                 count++
//             }
//         }
//     }
//     return count
// }


// console.log(noofpair([1,2,34,5,6,3,2,4,],7))

///// Q. find the no of triplets in array whose sum is equal to the given number
// function nooftriplets(arr,target){
//     let count = 0
//     for(let i = 0 ; i<arr.length ; i++){
//         for (let j=i+1 ; j<arr.length ; j++){
//             for (let k=j+1 ; k<arr.length ; k++){
//                 if (arr[i]+arr[j]+arr[k]===target){
//                     count++
//                 }
//             }
//         }
//     }
//     return count
// }

// console.log(nooftriplets([1,4,5,6,3],12))  // ans is 2



///// Q. find the unique number in array where all the numbers except one are present in pairs and elem are all positive 

// function uniqueNumber(arr){
//     for (let i=0 ; i<arr.length ; i++){
//         for (let j=i+1 ; j<arr.length ; j++){
//             if (arr[i]===arr[j]){
//                 arr[i]=-1
//                 arr[j]=-1
//             }
//         }
//     }
//     let ans = -1
//     for (let i=0 ; i<arr.length ; i++){
//         if (arr[i]!==-1){
//             ans = arr[i]
//         }
//     }
//     return ans
// }

// console.log(uniqueNumber([2,3,4,5,6,3,4,2,5]))

//Q. Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// var removeDuplicates = function(nums) {
//     if (nums.length === 0) return 0;

//     let i = 0; // Points to the last unique element
//     for (let j = 1; j < nums.length; j++) {
//         if (nums[j] !== nums[i]) {
//             i++;
//             nums[i] = nums[j]; // Place the unique element in the next position
//         }
//     }
    
//     return i + 1; // Number of unique elements
// };

// console.log(removeDuplicates([1,1,2]))

