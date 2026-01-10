// 14. Longest common prefix - proposed solution

/**
 * Problem: find the longest common prefix in an array of strings
 * 
 * Input
 *  1 array of strings
 * Output
 *  1 string (longest common prefix)
 * 
 * Example
 *  input: ["flower","flow","flight"]
 *  output: "fl"
 * 
 * Breakdown
 *  - Same index sharing through words
 *  - Check if same char
 *    - If different char - early return for false
 *    - If 1st word is completed (pivot) - meaning longest prefix has been found
 *  Notes:
 *    It will be O(m + n) where m is the length of the word taken for max iterations (1st one as default)
 */

var longestCommonPrefix = function(strs) {
  // Quick early return check
  if(strs.lenght === 1) return strs[0] 

  let char;
  let prefix = '';
  // max iterations is the lenght of 1st str
  for(let i = 0; i < strs[0].length; i++) {
    // Check values in all of them
    char = strs[0][i];
    for(s of strs) {
      if(s[i] !== char) return prefix
    } 

    prefix += char
  }

  return prefix;
}

const res = longestCommonPrefix(["flower","flow","flight"])

/**
 * Breakdown solution 2
 *  try simple O(n) with a candidate
 */
var longestCommonPrefix2 = function(strs) {
  if(strs.length === 0) return ''
  if(strs.length === 1) return strs[0]

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === '') return '';
    }
  }

  return prefix;
}

const res2 = longestCommonPrefix2(["flower","flow","flight"])
console.log(res2)