// comination sum 2
/* 
  Input: candidates = [10,1,2,7,6,1,5], target = 8
  Output: [ [1,1,6], [1,2,5], [1,7], [2,6] ]
  find all unique combinations sum equals to target
*/


/* using sum method  */ 

const combinationSum2 = (candidates, target) => {
   let res = [];
   candidates.sort((a, b) => a-b);
   
   const backtracking = (start, tempArr, sum) => {
     if(sum === target) res.push([...tempArr]);
     if(sum<=target) {
         for(let i=start; i<candidates.length; i++) {
            if(i>start && candidates[i] === candidates[i - 1]) continue; 
             backtracking(i+1, [...tempArr, candidates[i]],  sum + candidates[i]);
         }
     }  
   }
   backtracking(0, [], 0);
   return res;
};



/* using remaindr to check */

const combinationSum2 = (candidates, target) => {
   let res = [];
   candidates.sort((a, b) => a-b);
   
   const backtracking = (start, tempArr, remainder) => {
     for(let i=start; i<candidates.length&&candidates[i]<=remainder; i++) {
        if(candidates[i] === remainder && !isDuplicatedArr(res, [...tempArr, candidates[i]])) res.push([...tempArr, candidates[i]]);
           else backtracking(i+1, [...tempArr, candidates[i]],  remainder - candidates[i]);
     }  
   }
   backtracking(0, [], target);
   return res;
};

const isDuplicatedArr = (arr, nums) => arr.some(item => item.length === nums.length && 
                                                item.every((val, index) => val === nums[index]));
