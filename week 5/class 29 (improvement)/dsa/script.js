//number of palaindromic substring 


// let str = "aabb";
// let n = str.length;
// console.log("Length of string:", n);

// let count = 0;
// for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//         const substring = str.slice(i, j + 1);

//         if (isPalindrome(substring)) {
//             console.log("Palindrome:", substring);
//             count++; // Increment the count AFTER confirming it's a palindrome
//         }
//     }
// }
// console.log("Total Palindromic Substrings:", count);

// function isPalindrome(str) {
//     let left = 0;
//     let right = str.length - 1;

//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return false; // Not a palindrome
//         }
//         left++;
//         right--;
//     }
//     return true; // Is a palindrome
// }



// Question 22: Matrix Diagonal Sum
// Given an n x n matrix, calculate the sum of its diagonals (both main and secondary).

// Example:

// Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Output: 25
// Explanation: Main diagonal: 1 + 5 + 9 = 15, Secondary diagonal: 3 + 5 + 7 = 10. Total = 25.


// let  mat =  [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// let n = mat.length

// let digsum=0
// let antidigsum=0

// for (let i = 0 ; i<n ; i++){
//     for (let j = 0 ; j<n ; j++){
//         if (i===j){
//             digsum+=mat[i][j]
//             // console.log(mat[i][j]);
            
//         }
//         if(i+j===n-1){
//             antidigsum+=mat[i][j]
//             // console.log(mat[i][j]);

//         }
//     }
// }

// console.log(digsum,antidigsum)



//// diamond pattern 
// First part: Creating the upper half of the pattern
for (var i = 1; i <= 5; i++) {
    var str = "";
    
    // Spaces in the first part of the pattern
    for (var j = 5; j > i; j--) {
        str += " ";
    }
    
    // Stars in the first part of the pattern
    for (var k = 0; k < i; k++) {
        str += "*";
    }
    
    // Stars in the second part of the pattern (additional stars after the first ones)
    for (var l = 1; l < i; l++) {
        str += "*";
    }
    
    console.log(str);
}

// Second part: Creating the lower half of the pattern
for (var i = 4; i >= 1; i--) {
    var str = "";
    
    // Spaces in the second part of the pattern
    for (var j = 5; j > i; j--) {
        str += " ";
    }
    
    // Stars in the second part of the pattern
    for (var k = 0; k < i; k++) {
        str += "*";
    }
    
    // Stars in the second part (additional stars after the first ones)
    for (var l = 1; l < i; l++) {
        str += "*";
    }
    
    console.log(str);
}
