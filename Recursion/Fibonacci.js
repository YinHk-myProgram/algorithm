// Use recursion to find  Nth Fibonacci Number
/* The Fibonacci numbers are the numbers in the following integer sequence.
   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..
   
   Fn = Fn-1 + Fn-2
   
   Time Complexity: Exponential, as every function calls two other functions.
 */ 

function fib(n) {
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
}
