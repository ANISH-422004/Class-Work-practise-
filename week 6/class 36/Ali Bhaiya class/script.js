//// PRACTISE FOR TEST 

//ROTATE BY BLOCK SWAP 
// let arr = [10,20,30,40,50]

// function reverse(a , i , j){
//     while(i<j){
//         let temp = a[i]
//         a[i]=a[j]
//         a[j]=temp
//         i++
//         j--
//     }
//     return a
// }

// // console.log(reverse(arr,0,arr.length-1));

// function rightrorate(arr,k){
//     let n = arr.length
//     k= k%n
//     reverse(arr,0,k-1)
//     reverse(arr,k,n-1)
//     reverse(arr,0,n-1)
//     return arr
// }

// console.log(rightrorate(arr,6));


// Sagrigate 0s and 1 s

let arr = [1,0,0,1,1,0,0,0,1,1,0]

let j = 0 
for (let i = 0 ; i<=arr.length-1; i++ ){
    if(arr[i]===0){
        temp = arr[j]
        arr[j]= arr[i]
        arr[i]=temp
        j++
    }

}
console.log(arr);

