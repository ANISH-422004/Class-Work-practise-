// Tower of hanoi

// 1. You are given a number n, which represents the number of disks.
// 2. You are given a number t1, which represents the number of the tower.
// 3. You are given a number t2, which represents the number of the tower.


// The function is expected to print the steps to move n disks from t1 to t2 using t3


function towerOfHanoi(n, s, d, h){
    if(n==0){
        console.log("move 1 palte form " + s + " to " + d);
        return;
    }
    towerOfHanoi(n-1, s, h, d);
    console.log(n + "[" + s + " -> " + d + "]");
    towerOfHanoi(n-1, h, d, s);


}

towerOfHanoi(3, "sorce", "destination", "helper");