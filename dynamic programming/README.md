## Dynamic programming

### What is dynamic programming?
is both a mathematical optimization method and a computer programming method.

Dynamic programming is a technique that breaks the problems into sub-problems, and saves the result for future purposes so that we do not need to compute the result again.
The idea is to simply store the results of subproblems, so that we do not have to re-compute them when needed later.  This simple optimization reduces time complexities from exponential to polynomial.

If any problem can be divided into subproblems, which in turn are divided into smaller subproblems, and if there are overlapping among these subproblems, then the solutions to these subproblems can be saved for future reference. In this way, efficiency of the CPU can be enhanced. This method of solving a solution is referred to as dynamic programming.

Such problems involve repeatedly calculating the value of the same subproblems to find the optimum solution.

### When use dynamic programming?
The main use of dynamic programming is to **solve optimization problems**.

if you notice that the problem can be broken down into sub-problems and these can be broken into much smaller ones and some of these have overlap (i.e. requires the computation of previously calculated values). The main goal is to optimize the code by reducing the repetition of values by storing the results of sub-problems.

Dynamic Programming can be applied to **any such problem that requires the re-calculation of certain values to reach the final solution**.

### Logic & flows
- Draw a decision tree to visualize the problem(if needed, especially for **Top-down approach!**)
- breaking down an optimization problem into simpler sub-problems
- storing the solution to each sub-problem
- reuse the storing values/solution to solve subproblems that occur again. 

There are 2 ways to solve dynamic programming problems: 
- Top-down approach
- Bottom-up approach

**Top-down**: 
The top-down approach **follows the memoization technique**. It consists of two distinct events: recursion and caching. ‘Recursion’ represents the process of computation by calling functions repeatedly, whereas ‘caching’ represents the storing of intermediate results. Start by solving the problem in a natural manner and stored the solutions of the subproblems along the way. We also use the term memoization

something looks like: `F(n) = F(n-1) + F(n-2)`.

Advantages:

- Easy to understand and implement
- Solves the subproblem only if the solution is not memorized.
- Debugging is easier.

Disadvantages:

- Uses recursion, which takes up more memory space in the call stack, degrading the overall performance.
- Possibility of a stack overflow error.


Draw a decision tree to visualize the problem, find out the similar sub-problems, reuse the calculation of sub-problems !
![](./fibonacci.png)
![](./fibonacci2.png)

**Bottom-up**:
This approach **uses the tabulation technique** to implement the dynamic programming solution. It addresses the same problems as before, but without recursion. The recursion is replaced with iteration in this approach. Hence, there is no stack overflow error or overhead of recursive procedures. We maintain a table (3D matrix) to solve the problem in this method.  Starting from the bottom(eg: initial value as start point), use a term tabulation for this process because it is like filling up a table from the start.

you first calculate `F(0)` then `F(1)`, and save it to some array (for instance), then you continuously save `a(i) = a(i-1) + a(i-2)`. This is with O(n), you can avoid stack overflow.

![](./bottomUp.png)
![](./bottomUp2.png)

**Key Differences: Top-Down vs Bottom-Up Approach**
| Top-Down Approach | Bottom-Up Approach |
| --- | --- |
| Uses memorization technique | Uses tabulation technique |
| Recursive nature | Iterative nature |
| Structured programming languages such as COBOL, Fortran, C, and others mostly use this technique | Object-oriented programming languages such as C++, C#, and Python mostly use this technique |
| This approach uses decomposition to formulate a solution | This approach uses composition to develop a solution |
| A lookup table is maintained and checked before computation of any subproblem | The solution is built from a bottom-most case using iteration |

**Memoization** - This is a laissez-faire approach: You assume that you have already computed all subproblems and that you have no idea what the optimal evaluation order is. Typically, you would perform a recursive call (or some iterative equivalent) from the root, and either hope you will get close to the optimal evaluation order, or obtain a proof that you will help you arrive at the optimal evaluation order. You would ensure that the recursive call never recomputes a subproblem because you cache the results, and thus duplicate sub-trees are not recomputed.

**memorization** is equal to the sum of recursion and caching. **Recursion** means calling the function itself, while caching means storing the intermediate results

**example**: If you are calculating the Fibonacci sequence `fib(100)`, you would just call this, and it would call `fib(100)=fib(99)+fib(98)`, which would call `fib(99)=fib(98)+fib(97)`, ...etc..., which would call `fib(2)=fib(1)+fib(0)=1+0=1`. Then it would finally resolve `fib(3)=fib(2)+fib(1)`, but it doesn't need to recalculate `fib(2)`, because we cached it.
This starts at the top of the tree and evaluates the subproblems from the leaves/subtrees back up towards the root.

**Tabulation** - You can also think of dynamic programming as a "table-filling" algorithm (though usually multidimensional, this 'table' may have non-Euclidean geometry in very rare cases*). This is like memoization but more active, and involves one additional step: You must pick, ahead of time, the exact order in which you will do your computations. This should not imply that the order must be static, but that you have much more flexibility than memoization.

**example**: If you are performing fibonacci, you might choose to calculate the numbers in this order: fib(2),fib(3),fib(4)... caching every value so you can compute the next ones more easily. You can also think of it as filling up a table (another form of caching).
I personally do not hear the word 'tabulation' a lot, but it's a very decent term. Some people consider this "dynamic programming".
Before running the algorithm, the programmer considers the whole tree, then writes an algorithm to evaluate the subproblems in a particular order towards the root, generally filling in a table.

### Dynamic Programming vs Recursion
Dynamic programming is mostly applied to recursive algorithms. This is not a coincidence, most optimization problems require recursion and dynamic programming is used for optimization.

But not all problems that use recursion can use Dynamic Programming. Unless there is a presence of overlapping subproblems like in the fibonacci sequence problem, a recursion can only reach the solution using a divide and conquer approach.

That is the reason why a recursive algorithm like Merge Sort cannot use Dynamic Programming, because the subproblems are not overlapping in any way.

Here, the basic idea is to save time by efficient use of space. **Recursion takes time but no space** while **dynamic programming uses space to store solutions** to subproblems for future reference thus saving time. 
- Time complexity: recurrsion > dynamic programming
- Space complexity: dynamic programming > recurrsion 

### Dynamic Programming vs Greedy Algorithms
Greedy Algorithms are similar to dynamic programming in the sense that they are both tools for optimization.

However, greedy algorithms look for locally optimum solutions or in other words, a greedy choice, in the hopes of finding a global optimum. Hence greedy algorithms can make a guess that looks optimum at the time but becomes costly down the line and do not guarantee a globally optimum.

Dynamic programming, on the other hand, finds the optimal solution to subproblems and then makes an informed choice to combine the results of those subproblems to find the most optimum solution.

**Remember, dynamic programming should not be confused with recursion**.

**Recursion** is a way of finding the solution by expressing the value of a function in terms of other values of that function directly or indirectly and such function is called a recursive function. It follows a top-down approach.

**Dynamic programming** is nothing but recursion with memoization i.e. calculating and storing values that can be later accessed to solve subproblems that occur again, hence making your code faster and reducing the time complexity (computing CPU cycles are reduced).

### ref 
https://www.freecodecamp.org/news/demystifying-dynamic-programming-3efafb8d4296/

https://towardsdatascience.com/beginners-guide-to-dynamic-programming-8eff07195667

https://www.geeksforgeeks.org/dynamic-programming/#advanced

https://www.youtube.com/watch?v=vYquumk4nWw

https://www.enjoyalgorithms.com/blog/top-down-memoization-vs-bottom-up-tabulation

https://www.youtube.com/watch?v=_i_nTcwyh-E

https://www.codesdope.com/course/algorithms-dynamic-programming/

### All dynamic programming problems
#### Basic
1. Ugly numbers
2. Fibonacci numbers
3. nth Catalan Number
4. Bell Numbers (Number of ways to Partition a Set)
5. Binomial Coefficient
6. Permutation Coefficient
7. Tiling Problem
8. Gold Mine Problem
9. Coin change problem
10. Friends Pairing Problem
11. Subset Sum Problem
12. Subset Sum Problem in O(sum) space
13. Subset with sum divisible by m
14. Largest divisible pairs subset
15. Perfect Sum Problem (Print all subsets with given sum)
16. Compute nCr % p
17. Choice of area
18. Cutting a Rod
19. Tiling with Dominoes
20. Painting Fence Algorithm
21. Newman–Shanks–Williams prime
22. Assembly line scheduling
23. Golomb sequence
24. Moser-de Bruijn Sequence
25. Newman-Conway Sequence
26. Find maximum length Snake sequence
27. Print n terms of Newman-Conway Sequence
28. Print Fibonacci sequence using 2 variables
29. Print Fibonacci Series in reverse order
30. Count even length binary sequences with same sum of first and second half bits
31. Sequences of given length where every element is more than or equal to twice of previous
32. Longest Common Subsequence
33. Longest Repeated Subsequence
34. Longest Increasing Subsequence
35. A Space Optimized Solution of LCS
36. LCS (Longest Common Subsequence) of three strings
37. Maximum sum Bi-tonic Sub-sequence
38. Maximum Sum Increasing Subsequence
39. Maximum product of an increasing subsequence
40. Count all subsequences having product less than K
41. Maximum subsequence sum such that no three are consecutive
42. Longest subsequence such that difference between adjacents is one
43. Maximum length subsequence with difference between adjacent elements as either 0 or 1
44. Maximum sum increasing subsequence from a prefix and a given element after prefix is must
45. Maximum Length Chain of Pairs
46. Print Maximum Length Chain of Pairs
47. Path with maximum average value
48. Maximum games played by winner
49. Maximum path sum in a triangle
50. Minimum Sum Path in a Triangle
51. Maximum sum of a path in a Right Number Triangle
52. Size of The Subarray With Maximum Sum
53. Maximum sum of pairs with specific difference
54. Maximum size square sub-matrix with all 1s
55. Maximum number of segments of lengths a, b and c
56. Recursively break a number in 3 parts to get maximum sum
57. Maximum value with the choice of either dividing or considering as it is
58. Maximum weight path ending at any element of last row in a matrix
59. Maximum sum in a 2 x n grid such that no two elements are adjacent
60. Maximum difference of zeros and ones in binary string | Set 2 (O(n) time)
61. Maximum path sum for each position with jumps under divisibility condition
62. Maximize the sum of selected numbers from an array to make it empty
63. Maximum subarray sum in an array created after repeated concatenation
64. Maximum path sum that starting with any cell of 0-th row and ending with any cell of (N-1)-th row
65. Min Cost Path
66. Minimum number of jumps to reach end
67. Minimum cost to fill given weight in a bag
68. Minimum sum of multiplications of n numbers
69. Minimum removals from array to make max – min <= K
70. Minimum steps to minimize n as per given condition
71. Minimum number of edits ( operations ) require to convert string 1 to string 2
72. Minimum time to write characters using insert, delete and copy operation
73. Longest Common Substring
74. Longest Common Substring (Space optimized DP solution)
75. Sum of all substrings of a string representing a number | Set 1
76. Find number of endless points
77. Find n-th element from Stern’s Diatomic Series
78. Find maximum possible stolen value from houses
79. Find number of solutions of a linear equation of n variables
80. Count number of ways to reach a given score in a game
81. Count ways to reach the nth stair using step 1, 2 or 3
82. Count of different ways to express N as the sum of 1, 3 and 4
83. Count ways to build street under given constraints
84. Count Balanced Binary Trees of Height h
85. Counting pairs when a person can form pair with at most one
86. Counts paths from a point to reach Origin
87. Count number of ways to cover a distance
88. Count of arrays having consecutive element with different values
89. Count ways to divide circle using N non-intersecting chords
90. Count the number of ways to tile the floor of size n x m using 1 x m size tiles
91. Count all possible paths from top left to bottom right of a mXn matrix
92. Count number of ways to fill a “n x 4” grid using “1 x 4” tiles
93. Largest Sum Contiguous Subarray
94. Smallest sum contiguous subarray
95. Size of array after repeated deletion of LIS
96. Remove array end element to maximize the sum of product
97. Convert to Strictly increasing array with minimum changes
98. Longest alternating (positive and negative) subarray starting at every index
99. Ways to sum to N using array elements with repetition allowed
100. Unique paths in a Grid with Obstacles
101. Number of n-digits non-decreasing integers
102. Number of ways to arrange N items under given constraints
103. Probability of reaching a point with 2 or 3 steps at a time
104. Value of continuous floor function : F(x) = F(floor(x/2)) + x
105. Number of decimal numbers of length k, that are strict monotone
106. Different ways to sum n using numbers greater than or equal to m


#### Intermediate Problems :
- Lobb Number
- Eulerian Number
- Delannoy Number
- Entringer Number
- Rencontres Number
- Jacobsthal and Jacobsthal-Lucas numbers
- Super Ugly Number (Number whose prime factors are in given set)
- Floyd Warshall Algorithm
- Bellman–Ford Algorithm
- 0-1 Knapsack Problem
- Printing Items in 0/1 Knapsack
- Unbounded Knapsack (Repetition of items allowed)
- Temple Offerings
- Egg Dropping Puzzle
- Dice Throw Problem
- Word Break Problem
- Vertex Cover Problem
- Tile Stacking Problem
- Box-Stacking Problem
- Highway Billboard Problem
- Largest Independent Set Problem
- Partition Problem
- Print equal sum sets of array (Partition problem) | Set 1
- Print equal sum sets of array (Partition Problem) | Set 2
- High-effort vs. Low-effort Tasks Problem
