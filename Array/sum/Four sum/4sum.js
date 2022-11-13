var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b)
  const results = []
  kSum(nums, target, 4, 0, [], results)
  return results
}

function kSum(nums, target, k, i, acc, results) {
  if (nums[i] * k > target || nums[nums.length - 1] * k < target) return
  if (k > 2) {
    for (let j = i; j <= nums.length - k; j++) {
      if (j == i || nums[j] > nums[j - 1])
        kSum(nums, target - nums[j], k - 1, j + 1, [...acc, nums[j]], results)
    }
  } else {
    twoSum(nums, target, i, acc, results)
  }
}

function twoSum(nums, target, i, acc, results) {
  let lo = i
  let hi = nums.length - 1
  while (lo < hi) {
    const sum = nums[lo] + nums[hi]
    if (sum == target) {
      results.push([...acc, nums[lo], nums[hi]])
      while (nums[lo] == nums[lo + 1]) lo++
      while (nums[hi] == nums[hi - 1]) hi--
      lo++
      hi--
    } else if (sum < target) {
      lo++
    } else {
      hi--
    }
  }
};

//or
const threeSum = (nums, target) => {
   nums.sort((a, b) => a-b); 
   let triplet = [];
   
    for(let i=0; i<nums.length-2; i++) {
        if(i>0 && nums[i] === nums[i-1]) continue; 
        //loop from bothside: i+1 & last
        let front = i+1;
        let rear = nums.length-1;
       
        while(front < rear) {
           let sum = nums[i] + nums[front] + nums[rear]; 
           if(sum < target) front++;
           else if(sum > target) rear--;
           else {
            triplet.push([nums[i], nums[front], nums[rear]]);
            //loop through the rest, make sure the contain duplicate the triplets does not contain the duplicated triplet
            while(nums[front] === nums[front+1]) front++; 
            while(nums[rear] === nums[rear-1]) rear--;
            front++;
            rear--;
           } 
        }
    }
    return triplet;
};

var fourSum = function(nums, target) {
    //Sort nums
    nums.sort((a, b) => a-b);
    let quadruplets = [];
    
    for(let i=0; i<nums.length-3; i++) {
       if(i>0 && nums[i] === nums[i-1]) continue; 
       let arr = [...nums];
       arr.splice(0, i+1);
       const triplets =  threeSum(arr, target-nums[i]);

       if(triplets.length > 0) {
           triplets.forEach(item => {
            let temp = [nums[i]];
            temp.push(...item);
            quadruplets.push(temp);
           });
       }

    }
    return quadruplets;
};



//or 
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b)
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target && nums[i] > 0) continue
        if (i > 0 && nums[i] === nums[i-1]) continue
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] > target && nums[i]+ nums[j] > 0) break
            if (j > i + 1 && nums[j] === nums[j - 1]) continue
            let left = j + 1
            let right = nums.length - 1
            while (right > left) {
                if (nums[i] + nums[j] + nums[left] + nums[right] > target) right--
                else if (nums[i] + nums[j] + nums[left] + nums[right] < target) left++
                else {
                    res.push([nums[i] , nums[j] , nums[left] , nums[right]])
                    while (right > left && nums[left] === nums[left + 1]) left++
                    while (right > left && nums[right] === nums[right - 1]) right--
                    left++
                    right--
                }
            }
        }
    }
    return res
};



//or

var fourSum = function(nums, target) {
    nums.sort((a,b)=>{
        return a-b
    })
    let res = []
    
    for(let i=0; i<nums.length-3;i++){
        if(i>0 && nums[i] === nums[i-1]){
            continue;
        }
        for(let j= i+1; j< nums.length-2; j++){
            if(j>i+1 && nums[j] === nums[j-1]){
                continue;
            }
            let left = j+1
            let right = nums.length- 1
            while(left < right){
                let sum = nums[left] + nums[right]+ nums[i] + nums [j]
                if(sum === target){
                    res.push([nums[i],nums[j],nums[left],nums[right]])
                    while(nums[left] === nums[left + 1]) left++
                    while(nums[right] === nums[right - 1]) right --
                    right--
                    left++
                }else if(sum < target){
                    left++
                }else{
                    right--
                }
            }
        }
    }
    return res
};


