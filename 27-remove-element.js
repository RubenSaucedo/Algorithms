// 27 remove element 

/**
 * imput : nums = [3,2,2,3], val = 3
 * output: 2, nums = [2,2,...]
 * 
 * Breakdown solution
 * Using 2 pointers strategy swap elements till target elements are moved to the end
 * O(n) solution we will only iterate once
 */

var removeElement = function(nums, val) {
    // setting 2 pointers
    let i = 0;
    let k = nums.length - 1;

    const swap = (l, r) => {
        [nums[l], nums[r]] = [nums[r], nums[l]]
    }

    while(i <= k) {
        // Case 1: target value in pointer
        if (nums[i] === val) {
            swap(i, k); 
            k--; 
        } else {
            // Case 2: no target value
            i++; 
        }
    }

    return i;
}

const res = removeElement([3, 3], 3)
console.log(res);