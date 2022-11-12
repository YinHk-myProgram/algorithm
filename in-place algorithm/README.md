## in-place algorithm

An **in-place algorithm** is an algorithm which transforms its input using no auxiliary data structure. 
Essentially, this means that if an in-place algorithm is written to take in an array as an argument, 
- **it must modify that array in its original place in memory**,
- **no extra arrays, objects, or pointers in memory may be used**.
  
  
### strict defination
> An in-place algorithm is an algorithm that does not need an extra space and produces an output in the same memory that contains the data by transforming the input ‘in-place’. However, a small constant extra space used for variables is allowed. 

###  broad definition
> In-place means that the algorithm does not use extra space for manipulating the input but may require a small though non-constant extra space for its operation. Usually, this space is O(log n), though sometimes anything in O(n) (Smaller than linear) is allowed.
  
  
###  why use in-place algorithm?
The reason this is important is that allocation and destruction of pointers in memory, particularly for arrays and objects, are relatively memory-heavy operations. If we can modify an array in-place, without adding additional and unnecessary copies, 
we can create a tangible savings on memory and runtime complexity
