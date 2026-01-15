// 26. Remove duplicates from sorted array

var removeDuplicates = function(nums) {
    // shortcut
    if (nums.length < 1) return nums.length;

    // set pointers
    let i = 0;
    let j = 1;

    const swap = (l, r) => {
        nums[l] = nums[r];
    }

    // iterate through the arrau
    while(nums[j] !== undefined) {
        // Case 1: i === j - move the pointer only
        if (nums[i] === nums[j]) {
            j++;
        } else {
            // Case 2: i !== j
            swap(i + 1, j);
            i++;
            j++;
        }
    }

    console.log(nums)
    return i + 1;
};

const res = removeDuplicates([1, 1, 2])
console.log(res);

// Solution optimized by AI
var removeDuplicatesAI = function(nums) {
    if (nums.length < 1) return nums.length;

    let i = 0;
    
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
};

const res2 = removeDuplicatesAI([1, 1, 2])
console.log(res2);