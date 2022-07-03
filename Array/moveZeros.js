/*
    [0,1,0,3,12] -> [1,3,12,0,0]
    
 */

const moveZeroes = nums => {
  let countZeros = 0;
  
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      countZeros++;
      i--;
    }
  }
  for (let i = 0; i < ountZeros; i += 1) {
    nums.push(0);
  }
  return nums;
};
 
 
