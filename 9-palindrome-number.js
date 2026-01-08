// 9. Palindrome Number - proposed solution

/**
 * Input
 *  1 integer
 * Output
 *  boolean
 * 
 * Example
 *  input: 121
 *  output: true
 * 
 * Assumptions or edge cases
 *  int can be 0 
 *  int can be negative (all negative values seems to be false)
 *  
 * Proposed solution strategy
 *  - 2 pointers, it will have to be transformed to a string
 * 
 * Breakdown solution
 *  - transform to a string
 *  - set pointer at start and end
 *  - check if palindrome
 *    - if same, move both pointers closer
 *    - if different, return false
 * 
 * Some potential early returns
 *  - negative 
 */

var isPalindrome = function(x) {
  // to string
  const str = x.toString();  
  // set 2 pointes
  let left = 0;
  let right = str.length - 1;

  // check if palindrome
  while(left < right) {
    if (str[left] === str[right]) {
      left += 1;
      right -= 1;
    } else return false
  }

  return true;
};

const res = isPalindrome(1221)
// console.log(res)

// Now with no string transformation
/**
 * Considerations
 *  - only positive numbers can be palindromes
 * Mathematical logic
 *  - getting digits
 *  - Pushing them in an array
 *  - removing the last digit
 *  - comparing from start and end
 * 
 * Breaking down the solution
 *  - Using module to get last digit %10
 *  - Using division to get first digit 
 */
var isPalindromeNoString = function(x) {
  let digits = [];

  let digit;
  let current = x
  
  // Get new structure
  while(current > 0) {
    // getting digit
    digit = current % 10;
    digits.push(digit)

    // removing last digit
    current = Math.floor(current / 10);
  }

  // Check if palindrome
  let left = 0;
  let right = digits.length - 1;

  // check if palindrome
  while(left < right) {
    if (digits[left] === digits[right]) {
      left += 1;
      right -= 1;
    } else return false
  }

  return true;
}

const res2 = isPalindromeNoString(1232321);

// Now with no string transformation
/**
 * Considerations
 *  - only positive numbers can be palindromes
 * Mathematical logic
 *  - getting digits
 * 
 * Breaking down the solution
 *  - Using module to get last digit %10
 *  - for a reverse number
 *    - digit * unity(place in units, tens, huns) + value
 *    - doing this till mod of original is 0
 *  - comparing original number with reversed number
 */
var isPalindromeNoString2 = function(x) {
  let digit = 0;
  let original = x
  let reversed = 0;

  while(original > 0) {
    // shaping reversed
    digit = original % 10; // 1
    reversed = (reversed * 10) + digit; // 0 + 1 = 1

    // moving the needles
    original = ~~(original / 10)
  }

  return reversed === x
}

const res3 = isPalindromeNoString2(121);
console.log(res3);