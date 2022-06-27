/*  Using backtracking to find out permutations */

//find permutations for given array of digits

var permute = function(nums) {

  var results = [];
  
  var recursive = (result) => {

    if (result.length === nums.length) {
      results.push(result.slice());
      return;
    }

    for (var i = 0; i < nums.length; i++) {
      if (!result.includes(nums[i])) {
        result.push(nums[i]);
        recursive(result);
        result.pop();
      }
    }
    
  }

  recursive([]);
  return results;
  
};

