## Backtracking Algorithms
A **backtracking algorithm** is a problem-solving algorithm that uses a **brute force approach for finding the desired output**.

> Draw a tree diagram to list out the posssible solutions

> The Brute force approach tries out all the possible solutions and chooses the desired/best solutions.

**Steps:**

- 1. Adding a tree node through the iteration proccess
- 2. recursion(backtracking, just repeat all the steps in subtrees)
- 3. remove a tree node before next interation
- 4. if a solution found, add to the solutions set and add return keyword to stop that iteration process.

Backtracking is an algorithmic technique for **solving problems recursively** by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point of time.

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
#### Pseudo Code for Backtracking:
Recursive backtracking solution. 
```
void findSolutions(n, other params) :
    if (found a solution) :
        solutionsFound = solutionsFound + 1;
        displaySolution();
        if (solutionsFound >= solutionTarget) : 
            System.exit(0);
        return

    for (val = first to last) :
        if (isValid(val, n)) :
            applyValue(val, n);
            findSolutions(n+1, other params);
            removeValue(val, n);
 ```
 
Finding whether a solution exists or not: 
 ```
 boolean findSolutions(n, other params) :
    if (found a solution) :
        displaySolution();
        return true;

    for (val = first to last) :
        if (isValid(val, n)) :
            applyValue(val, n);
            if (findSolutions(n+1, other params))
                return true;
            removeValue(val, n);
        return false;
 ```
