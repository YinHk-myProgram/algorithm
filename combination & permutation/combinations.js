/* recurrsive backtracking  method */

// list all the combination of k numbers out of n numbers (assume [1 ... n])

const combinations = (n, k) => {
  let res = [];

  const backtracking = (start, tempArr) => {
    if (tempArr.length === k) {
      res.push([...tempArr]);     //make copy of the reference
      return;                     //finish a part of combination result
    }

    for (let i = start; i < n + 1; i++) {
      //backtracking logic
      tempArr.push(i);
      backtracking(i + 1, tempArr);      //do recursion here
      tempArr.pop();                     //remove the current item
    }
  };
  backtracking(1, []);
  return res;
};


//eg:
combinations(5, 3);
/*
 [
  [ 1, 2, 3 ], [ 1, 2, 4 ],
  [ 1, 2, 5 ], [ 1, 3, 4 ],
  [ 1, 3, 5 ], [ 1, 4, 5 ],
  [ 2, 3, 4 ], [ 2, 3, 5 ],
  [ 2, 4, 5 ], [ 3, 4, 5 ]
 ]
*/
  



