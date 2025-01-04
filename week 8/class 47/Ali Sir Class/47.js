//Q.frequency of each element in the arrat

// let arr = [5, 8, 1, 2, 2, 3, 4, 5,5,5, 2, 1, 7, 8, 7, 9, 10]
// for (let i = 0; i < arr.length; i++) {
//     let count = 1
//     if (arr[i] != -1) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]){
//                 count++
//                 arr[j] =-1
                
//             } 
//         }
//         console.log(`${arr[i]} : ${count}`);
//     }
// }


//Q.count number of subarray whose sum of all emlem is equal to some target
// let arr =[1,2,3,7,5,12]
// let sum = 12 , count = 0 
// for(let i = 0 ; i <arr.length ; i++){
//     let currentsum= 0 
//     for(let j =i ; j<arr.length ; j++){
//         currentsum+=arr[j]
//         if(currentsum==sum) count++
//     } 

// }

// console.log(count);

//.find the length of subarray whose sum of all emlem is equal to some target
//Q.count number of subarray whose sum of all emlem is equal to some target
// let arr = [1, 2, 3, 7, 5, 12];
// let sum = 12;
// let count = 0;
// let maxlen = 0;

// for (let i = 0; i < arr.length; i++) {
//     let currentsum = 0;
//     let len = 0;
//     for (let j = i; j < arr.length; j++) {
//         currentsum += arr[j];
//         len++;
//         if (currentsum == sum) {
//             count++;             // Increment count
//             if (len > maxlen) {   // Update maxlen if necessary
//                 maxlen = len;
//             }
//         }
//     }
// }

// console.log("Count of subarrays:", count);
// console.log("Maximum length of subarray:", maxlen);
