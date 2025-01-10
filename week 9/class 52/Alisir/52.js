let nums1 = [1, 2, 3, 4];
let nums2 = [2, 5, 7];
let ans = new Array(nums1.length + nums2.length).fill(0);
let i = 0, j = 0, k = 0;

while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
        ans[k] = nums1[i];
        i++;
    } else {
        ans[k] = nums2[j];
        j++;
    }
    k++;
}

while (i < nums1.length) {
    ans[k] = nums1[i];
    i++;
    k++;
}

while (j < nums2.length) {
    ans[k] = nums2[j];
    j++;
    k++;
}

console.log(ans);
