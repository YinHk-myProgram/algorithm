// comination sum 3
/*
    Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
    - Only numbers 1 through 9 are used.
    - Each number is used at most once.

*/ 

const combinationSum3 = (k, n) => {
    let res = [];
    let list = [];
    let sum = 0;
    
    dfs(k, n, result, list, sum, 1);     
    return res;
};

const dfs = function(k, n, result, list, sum, start){
    if(list.length === k && sum === n){
        result.push([...list]);
        return;
    }
    
    for(let i = start; i <= 9; i ++){
        if(list.length > k || sum > n) return;
        list.push(i);
        dfs (k, n, result, list, sum + i, i + 1);
        list.pop();
    }
}   
