const twoSum = function(nums, target) {
  const myObject = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (myObject.hasOwnProperty(complement)) {
      return [myObject[complement], i];
    }
    myObject[nums[i]] = i;
  }
};


//or
const twoSum = function(nums, target) {
    let number = []
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<=nums.length-1;j++){
            if(nums[i]+nums[j]==target){
               number.push(i,j)  
             }
        } 
    } 
    return number
};
