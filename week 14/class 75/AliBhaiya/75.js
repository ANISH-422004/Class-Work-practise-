//cyclic sort 

var sortArray = function(nums) {
    let i = 0;
    
    while (i < nums.length) {
        let correctIdx = nums[i] - 1;  // Find the correct index for nums[i]
        
        if (nums[i] !== nums[correctIdx]) {
            [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]]; // Swap to correct position
        } else {
            i++;  // Move to next element only if it's in the correct position
        }
    }
    
    return nums;
};

// Example usage
console.log(sortArray([3, 1, 5, 4, 2]));  // Output: [1, 2, 3, 4, 5]
