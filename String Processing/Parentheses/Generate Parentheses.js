//Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 
/*

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]

*/


var generateParenthesis = function(n) {
    
    let stack = [];
    recurrsion(0, 0, '', stack, n);
    return stack;
};

const recurrsion = (openCount, closeCount, str, stack, n) => {
    
    // If open parenthese + close parenthese = 2n, then finish
    if(openCount === n && closeCount === n) {
        stack.push(str);
        return;
    }
    
    // add open parenthese if open parenthese < n
    if(openCount < n)
       recurrsion(openCount+1,  closeCount, str+'(', stack, n);
    
    // add close parenthese if close parenthese < open parenthese
    if(closeCount < openCount) 
       recurrsion(openCount,  closeCount+1, str+')', stack, n);
    
}

