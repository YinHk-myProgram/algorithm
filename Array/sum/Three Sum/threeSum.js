var threeSum = function(nums) {
   nums.sort((a, b) => a-b); 
   let triplet = [];
   
    for(let i=0; i<nums.length-2; i++) {
        if(i>0 && nums[i] === nums[i-1]) continue; 
        //loop from bothside: i+1 & last
        let front = i+1;
        let rear = nums.length-1;
       
        while(front < rear) {
           let sum = nums[i] + nums[front] + nums[rear]; 
           if(sum < 0) front++;
           else if(sum > 0) rear--;
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

// or
const threeSum = function(array) {
     array.sort((a,b) => a - b);
    const triplets = [];

    for(let i=0; i < array.length - 2; i++){
        if(array[i] != array[i-1]){ // making sure our solution set does not contain duplicate triplets
            let left = i + 1;
          let right = array.length - 1;

            while (left < right){
                const currentSum = array[i] + array[left] + array[right];
                if (currentSum === 0){
                    triplets.push([array[i], array[left], array[right]]);
                    while(array[left] == array[left + 1]) left ++
                    while(array[right] == array[right - 1]) right -- // making sure our solution set does not contain duplicate triplets
                    left ++;
                    right --;
                } else if(currentSum < 0) {
                    left ++
                } else if(currentSum > 0){
                    right --
                }
            }
        }
    }
    return triplets
};

// or 
const threeSum = function(nums) {
  var len = nums.length;
  var res = [];
  var l = 0;
  var r = 0;
  nums.sort((a, b) => (a - b));
  for (var i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    l = i + 1;
    r = len - 1;
    while (l < r) {
      if (nums[i] + nums[l] + nums[r] < 0) {
        l++;
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r--;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      }
    }
  }
  return res;
};
