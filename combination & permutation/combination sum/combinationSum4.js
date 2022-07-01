const combinationSum4 = (nums, target) => {
   let res = [];
   nums.sort((a, b) => a-b);
   
   const backtracking = (tempArr, remainder) => {
     for(let i=0; i<nums.length&&nums[i]<=remainder; i++) {
        if(nums[i] === remainder) res.push([...tempArr, nums[i]]);
           else backtracking([...tempArr, nums[i]],  remainder - nums[i]);
     }  
   }
   backtracking([], target);
   return res.length;
};
