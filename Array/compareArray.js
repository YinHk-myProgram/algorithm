/* Compare Arrays in JavaScript */

//Arrays are objects in JavaScript, so the triple equals operator === only returns true if the arrays are the same reference.
const a = [1, 2, 3];
const b = [1, 2, 3];

a === a; // true
a === b; // false

//checking same length && same values
a.length === b.length && a.every((val, index) => val === b[index]);
