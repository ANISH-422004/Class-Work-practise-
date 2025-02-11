//Merge Sort

let arr = [9, 6, 10, 3, 8, 1];

let divide = (arr, f, l) => {
    if (f < l) {
        let m = f + Math.floor((l - f) / 2);
        divide(arr, f, m);
        divide(arr, m + 1, l);
        conquer(arr, f, m, l);
    }
};

let conquer = (arr, f, m, l) => {
    let temp = [];
    let i = f, j = m + 1;

    while (i <= m && j <= l) {
        if (arr[i] <= arr[j]) temp.push(arr[i++]);
        else temp.push(arr[j++]);
    }

    while (i <= m) temp.push(arr[i++]);
    while (j <= l) temp.push(arr[j++]);

    // Copy sorted elements from temp back to arr
    for (let k = 0; k < temp.length; k++) {
        arr[f + k] = temp[k];
    }
};

divide(arr, 0, arr.length - 1);
console.log(arr);



//Quick sort 
var sortArray = function(nums) {
    let quickSort = (arr, low, high) => {
        if (low <= high) {
            let pivotIdx = partition(arr, low, high);
            quickSort(arr, low, pivotIdx - 1);
            quickSort(arr, pivotIdx + 1, high);
        }
    };

    let partition = (arr, low, high) => {
        let pivot = arr[high]; // Choosing the last element as pivot
        let idx1 = low - 1;  // Pointer for smaller elements

        for (let idx2 = low; idx2 < high; idx2++) {
            if (arr[idx2] <= pivot) {
                idx1++;
                [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; // Swap
            }
        }

        // Place pivot in its correct position
        [arr[idx1 + 1], arr[high]] = [arr[high], arr[idx1 + 1]];
        return idx1 + 1;  // Return pivot index
    };

    quickSort(nums, 0, nums.length - 1);
    return nums;
};

// Example usage
console.log(sortArray([9, 6, 10, 3, 8, 1]));
