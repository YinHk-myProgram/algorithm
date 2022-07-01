/* Find out the combination sum */

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]


/* beack tracking method and checking remainder */ 
const combinationSum = (nums, target) => {
    let res = [];
    nums.sort((a, b) => a-b);
    
    const backtracking = (start, tempArr, remainder) => {
        for(let i=start; i<nums.length&&nums[i]<=remainder; i++) {
            if(nums[i] === remainder)  res.push([...tempArr, nums[i]]);
             else backtracking(i, [...tempArr, nums[i]],  remainder - nums[i]);   //make a copy instead using reference   
        }
    }
    backtracking(0, [], target);
    return res;
};


/*

[ 2 ]
[ 2, 2 ]
[ 2, 2, 2 ]
[ 2, 2, 2, 2 ]
[ 2, 2, 2, 2, 2 ]
[ 2, 2, 2, 2, 2, 2 ] — success!
[ 2, 2, 2, 5 ]
[ 2, 2, 2, 6 ] — success!
[ 2, 2, 5 ]
[ 2, 2, 6 ]
[ 2, 5 ]
[ 2, 5, 5 ] — success!
[ 2, 6 ]
[ 5 ]
[ 5, 5 ]
[ 5, 6 ]
[ 6 ]
[ 6, 6 ] — success!

*/
--------------------------------------------------------------------------------------------


/* beack tracking method and checking sum */ 
var combinationSum = function(candidates, target) {
    let res = [];
    let index = 0;
    candidates.sort((a, b) => a-b);
    
    const backtracking = (tempArr, sum) => {
      if(sum===target && isSorted(tempArr)) {
        res.push([...tempArr]);
        return;  
      }   
      if(sum>target) return;
      
      for(let i=0; i<candidates.length; i++) {
         tempArr.push(candidates[i])
         backtracking(tempArr, sum + candidates[i]); 
         tempArr.pop();
      }
    }
    backtracking([], 0);
    return res;
};

const isSorted = arr => arr.every((v,i,a) => !i || a[i-1] <= v);
