// swap two values by destructing assignment
// [a, b] = [b, a] is the destructuring assignment that swaps the variables a and b.
[a,b] = [b,a]

// By Temporary variable
let a = 1;
let b = 2;
let temp;

temp = a;
a = b;
b = temp;

// Addition and difference
// swap variables without the use of additional memory (like a temporary array or variable). 
// The following example swaps the variables a and b using the addition + and difference - arithmetic operators.
let a = 1;
let b = 2;

a = a + b;
b = a - b;
a = a - b;
// a => 2
// b => 1

// Bitwise XOR operator
// the bitwise XOR operator n1 ^ n2 performs the XOR operation on each bit of n1 and n2 numbers.
let a = 1;
let b = 2;
a = a ^ b;
b = a ^ b;
a = a ^ b;

