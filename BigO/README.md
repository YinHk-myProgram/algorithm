## BigO
There are two factors affect program performance: 
- Time complexity
- Space complexity

In programming space and time complexity matters a lot when we need to execute a program. Our algorithm should be efficient, and it should take less time. Whenever you’re writing a solution to a program, some memory is required to complete, and it is important for our program to take less memory and execute within a given timeframe. 

> A good program should take less memory and take less time to be executed

- O(1) – **constant complexity** – takes the same amount of space regardless of the input size
- O(log n) – logarithmic complexity – takes space proportional to the log of the input size
- O(n) – linear complexity – takes space directly proportional to the input size
- O(n log n) – log-linear/quasilinear complexity – also called “linearithmic”, its space complexity grows proportionally to the input size and a logarithmic factor
- O(n^2) – square/polynomial complexity – space complexity grows proportionally to the square of the input size

### Comparision of time complexity
> **O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2^n) < O(3^n) < O(n!)**

### No extra space or O(1) extra space
> Constant space means that the amount of space that your algorithm uses is independent of the input parameters. 
Say you are given an array of size n. If the amount of space your algorithm uses scales with n, then it's not constant. 

### Constant & Linear Space Complexity in Algorithms
memory may be used for the following…

- Variables (This includes the constant values, temporary values)
- Program Instruction
- Execution

Space Complexity is the total amount of memory a program an algorithm takes to execute and produce the result. Many times programmers get confused about Auxiliary Space and Space Complexity. Both are different. In any algorithm, the extra space or the temporary space that we use is known as Auxiliary space. 

**Data space** : 
during the execution of a program whatever space is required to store the constants and variable values are considered as Data Space.
> Note: While writing an algorithm you only need to consider the Data Space.


> **Space Complexity = Auxiliary Space + Input space**



### ref
https://blog.eepy.net/2020/06/15/a-gentle-explanation-of-logarithmic-time-complexity/

https://youtu.be/Mo4vesaut8g

https://www.geeksforgeeks.org/constant-linear-space-complexity-in-algorithms/
