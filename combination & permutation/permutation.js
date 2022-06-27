/*  Using backtracking to find out permutations */

//find permutations for given array of digits/strings
const permutations = (inputArr) => {
  let res = [];

  const backtracking = (tempArr) => {
    if (tempArr.length === inputArr.length) {
      res.push([...tempArr]);
      return;                       //finish a part of permutation result
    }

    for (let i = 0; i < inputArr.length; i++) {
      //backtracking logic
      if (!tempArr.includes(inputArr[i])) {
        tempArr.push(inputArr[i]);
        backtracking(tempArr);      //do recursion here
        tempArr.pop();              //remove the current item
      }
    }
  };
  backtracking([]);
  return res;
};



//eg:
permutations(['a', 'b', 'c']);
/*
 [
  [ 'a', 'b', 'c' ],
  [ 'a', 'c', 'b' ],
  [ 'b', 'a', 'c' ],
  [ 'b', 'c', 'a' ],
  [ 'c', 'a', 'b' ],
  [ 'c', 'b', 'a' ]
]
*/
permutations([1, 2, 3]);
/*
 [
  [ 1, 2, 3 ],
  [ 1, 3, 2 ],
  [ 2, 1, 3 ],
  [ 2, 3, 1 ],
  [ 3, 1, 2 ],
  [ 3, 2, 1 ]
 ]
*/

