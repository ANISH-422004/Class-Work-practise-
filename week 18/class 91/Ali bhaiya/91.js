// Tower of hanoi

// 1. You are given a number n, which represents the number of disks.
// 2. You are given a number t1, which represents the number of the tower.
// 3. You are given a number t2, which represents the number of the tower.


// The function is expected to print the steps to move n disks from t1 to t2 using t3


function towerOfHanoi(n, s, h , d) {

    // base case
    if (n == 0) {
        return;
    }

    towerOfHanoi(n-1 , s, d , h) // move n-1 disks from source to helper using destination as helper
    console.log(`Move one disk from ${s} to ${d}`) // move nth disk from source to destination
    towerOfHanoi(n-1 , h, s , d) // move n-1 disks from helper to destination using source as helper
    // move n-1 disks from helper to destination using source as helper


}

towerOfHanoi(3, "sorce", "destination", "helper");