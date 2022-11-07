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


//or hash table method
function twoSum(arr, S) {

  var sums = [];
  var hashTable = {};

  // check each element in array
  for (var i = 0; i < arr.length; i++) {
 
    // calculate S - current element
    var sumMinusElement = S - arr[i];

    // check if this number exists in hash table
    // if so then we found a pair of numbers that sum to S
    if (hashTable[sumMinusElement.toString()] !== undefined) { 
      sums.push([arr[i], sumMinusElement]);
    }

    // add the current number to the hash table
    hashTable[arr[i].toString()] = arr[i];

  }

  // return all pairs of integers that sum to S
  return sums;

}
