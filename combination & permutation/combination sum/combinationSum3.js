// comination sum 3
/*
    Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
    - Only numbers 1 through 9 are used.
    - Each number is used at most once.

*/ 

// version 1
const combinationSum3 = (k, n) => {
    let res = [];
    let list = [];
    let sum = 0;
    
    dfs(k, n, result, list, sum, 1);     
    return res;
};

const dfs = function(k, n, result, list, sum, start){
    if(list.length === k && sum === n){
        res.push([...list]);
        return;
    }
    
    for(let i = start; i <= 9; i ++){
        if(list.length > k || sum > n) return;
        list.push(i);
        dfs (k, n, result, list, sum + i, i + 1);
        list.pop();
    }
}   


//version 2
const combinationSum3 = (k, n) => {
   const nums = [1,2,3,4,5,6,7,8,9];
   let res = [];
   
   const backtracking = (start, tempArr, sum) => {
      if(tempArr.length > k) return;
      if(tempArr.length === k) {
         if(sum === n) {
             res.push([...tempArr]);
             return;
         }
         return;
      }
       
      for(let i=start; i<nums.length; i++) { 
         tempArr.push(nums[i]);
         backtracking(i+1, tempArr, sum + nums[i]);
         tempArr.pop();
      }  
   }
   
   for(let i=0; i<nums.length; i++) {
       backtracking(i+1, [nums[i]], nums[i]);
   }
   return res;  
};


