// 58-length-of-last-word.js

/**
 * input: string with words and spaces
 * output: length of the last word
 * 
 * A word is defined as a maximal substring consisting of non-space characters only. 
 */

var lengthOfLastWord = function(s) {
    const chunks = s.trim().split(" ");
    // trims
    const last = chunks[chunks.length - 1];

    return last.length;
};

const res = lengthOfLastWord("   fly me   to   the moon  ");
console.log(res);