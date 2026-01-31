// 28. Find the Index of the First Occurrence in a String

var strStr = function(haystack, needle) {
    
    let j = 0;
    let k = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[j]) {
            console.log(i)
            k = i
            // check if all the needle is in
            while(j < needle.length) {
                if(haystack[k] !== needle[j]) {
                    break;
                }
                if(haystack[k] === needle[j] && j === needle.length - 1) {
                    return i
                }
                k++;
                j++;
            }
            j = 0;
            k = 0;
        }
    } 

    return -1;
};

const res = strStr("hello", "ll")
console.log(res)

// with KMP algorithm

const strStrKMP = function(haystack, needle) {
    // Create the map of the needle
    
};

const resKMP = strStrKMP("hello", "ll")
console.log(resKMP)