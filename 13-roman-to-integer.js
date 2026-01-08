// 13. Roman to Integer - proposed solution

/**
 * Problem: transform a roman numeral to an integer
 * 
 * Input
 *  1 string (roman numeral)
 * Output
 *  1 integer
 * 
 * Example
 *  input: "III"
 *  output: 3
 * 
 * Break down the problem
 *  - Define what values are represented in the roman dict
 *  - most cases will be addition to the current value
 *  - Check on the special cases for substraction
 * 
 * Rules for roman to int
 *  - Reading left to right
 *  - Only 3 chars can substract if found at the left of another one: I, X, C
 *  - if there is no substraction we can add up as they are
 * 
 * Break down the problem
 *  - loop from left to right
 *  - add up the current value if non of the 3 rules for substraction is valid
 *  - substract if one of the rules is valid
 *  - return the value formed
 */

var romanToInt = function(s) {
    const numsMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };

    const subsMap = {
      I: ['V', 'X'],
      X: ['L', 'C'],
      C: ['D', 'M']
    };

    let res = 0;
    let index = s.length - 1;
    
    const isSubstraction = (left, right) => {
      if (right == undefined) return false;
      const substractFrom = subsMap[left];
      if (substractFrom == undefined) return false
      if (substractFrom.indexOf(right) > -1) return true;
      return false;
    }

    while (index >=0) {
      // Check for rules of substraction
      if (isSubstraction(s[index], s[index + 1])) {
        // If none above add up
        res -= numsMap[s[index]]
      } else {
        // If none above add up
        res += numsMap[s[index]]
      }
      index--;
    }

    return res;
};

const res = romanToInt('MCMXCIV');
console.log(res)