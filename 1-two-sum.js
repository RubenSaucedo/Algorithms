// 1 Two Sum. solution proposed

/**
 * Input
 *  2 array of integers
 *  1 int [target]
 * Output
 *  2 indexes of the 2 numbers that add up to target
 * 
 * Example
 *  input: [2, 7, 11, 15] target: 9
 *  output: [1, 2]
 * 
 * Assumptions
 *  There is always one solution
 *  Array is at least 2 elements
 *  There can be negative numbers
 * 
 * Break down the problem
 *  - math reasoning
 *    a (know) + b(unkown) = target(know)
 *    a = target - b
 *  - wait for b to know if there is some number that satisfies the operation
 * 
 * Solution
 *  - Create a new object
 *  - Iterate the array
 *    - Per each element calculate the expected unkown value and its index of the known value
 *    - If the unkown value is in one of the iteration => return current index and stored index
 *  
 */

var twoSum = function(nums, target) {
  const expected = {};
  let temp;

  for (let i in nums) {
    // calculation
    temp = target - nums[i];
    // check if present - if yes return the combination
    if (expected[nums[i]]) return [Number(i), Number(expected[nums[i]])]
    // if not add the expectated value ad current index - both satiesfies the combination
    expected[temp] = i
  }
};

const res1 = twoSum([2, 7, 11, 15], 9)
// const res2 = twoSum([3, 2, 4], 6)
// const res3 = twoSum([3, 3], 6)

console.log(res1)