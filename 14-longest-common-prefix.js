// 14. Longest Common Prefix - proposed solution

/**
 * Implementing the fastest solution 
 * 
 * Solution
 * Using substring and shortening the prefix as we travers the words
 * 
 * Breakdown
 * Assume 1st prefix is 1st word
 * Iteratre through each word
 *  Shortening the prefix till it is positive
 * Repeat with each word (efficient since prefix maybe defined since initial words)
 */

var longestCommonPrefix = function(strs) {
    if(strs.length === 1) return strs[0]
    
    let prefix = strs[0];
    for(let word of strs) {
        // console.log(word)
        // check if prefix is valid
        while(word.indexOf(prefix) !== 0) {
            // otherwise short it
            prefix = prefix.substring(0, prefix.length - 1)
            // console.log(word, prefix)
        }
    }

    return prefix;
}

const res = longestCommonPrefix(["c","acc","ccc"]);
console.log(res);