// 35. Search Insert Position

/**
 * input: sorted array
 * output: return index
 * 
 * Condition O(log n) 
 */

const searchInsert = function(nums, target) {
  // use left and right pointers for proper binary search
  let left = 0;
  let right = nums.length - 1;

  while(left <= right) {
    let p = Math.floor((left + right) / 2);
    
    if (target < nums[p]) {
      // select new pivot to the left
      right = p - 1;
    } else if (target > nums[p]) {
      // select new pivot to the right
      left = p + 1;
    } else {
      // found the value, return the index which is the pivot
      return p;
    }
  }
  
  // if not found, left is the insertion position
  return left;
};

const res = searchInsert([1,3], 2);
console.log(res);