// Use recursion to find  Nth Fibonacci Number
/* The Fibonacci numbers are the numbers in the following integer sequence.
   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..
   
   Fn = Fn-1 + Fn-2
   
   Time Complexity: Exponential, as every function calls two other functions.
 */ 

//Solution-1: Recursion-Top-down Approach
function fib(n) {
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
}

//Solution-2: Recursion with memoization, Optimization
// Recursion with memoization(also regard as dynamic programming-Top down approach)
 function fibMemo(n, memo = {}) {
     if (memo[n]) {
         return memo[n];
     } else {
         if (n == 1 || n == 2) {
             memo[n] = 1;
         } else {
             memo[n] = fibMemo((n - 1), memo) + fibMemo((n - 2), memo);
         }
     }
     return memo[n];
 }

