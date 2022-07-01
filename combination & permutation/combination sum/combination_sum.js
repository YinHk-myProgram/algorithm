/* Find out the combination sum */

//Input: candidates = [2,3,5], target = 8
//Output: [[2,2,2,2],[2,3,3],[3,5]]
// 
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
