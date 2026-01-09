// 20. Valid Parentheses - proposed solution

/**
 * Input
 * A string containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.
 * 
 * Output
 * Return true if the string is valid, and false otherwise.
 * 
 * Examples
 * "()" -> true
 * "()[]{}" -> true
 * "(]" -> false
 * 
 * Breakdown solution
 * Iterating through the string
 * Using stack DS to ensure
 *  open chars are stacked
 *  closed chars unstack
 *      we can only unstack if the top char is compatible
 * 
 * if stack is empty we return true
 */

var isValid = function(s) {
    if(s.length % 2 !== 0) return false;
    const open = ["(", "[", "{"];
    const closed = [")", "]", "}"];

    // Can be improved using dictionaries
    const isMatch = (left, right) => {
        return open.indexOf(left) === closed.indexOf(right)
    }

    // for simplicity - now
    const stack = [];

    for(char of s)  {
        // case open
        if(open.indexOf(char) > -1) {
            stack.push(char);
        } else {
            // case closed
            if(isMatch(stack[stack.length - 1], char)) {
                stack.pop();
            } else stack.push(char);
        }
        console.log(stack)
    }

    return stack.length === 0;
}

const res = isValid("]");
console.log(res)