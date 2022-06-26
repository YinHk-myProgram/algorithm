## Backtracking Algorithms
Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point of time

if the current solution is not suitable, then backtrack and try other solutions. Thus, recursion is used in this approach.
This approach is used to solve problems that have multiple solutions. If you want an optimal solution, you must go for dynamic programming.

### When to Use a Backtracking Algorithm?
The backtracking algorithm is applied to some specific types of problems. For instance, **we can use it to find a feasible solution to a [decision problem](https://en.wikipedia.org/wiki/Decision_problem).**
 **It was also found to be very effective for [optimization problems](https://en.wikipedia.org/wiki/Optimization_problem).**

```
Backtrack(x)
    if x is not a solution
        return false
    if x is a new solution
        add to list of solutions
    backtrack(expand x)
```
