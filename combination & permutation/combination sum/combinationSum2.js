// comination sum 2
/* 
  Input: candidates = [10,1,2,7,6,1,5], target = 8
  Output: [ [1,1,6], [1,2,5], [1,7], [2,6] ]
  find all unique combinations sum equals to target
*/


/* using sum method  */ 

var combinationSum2 = function(candidates, target) {
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
