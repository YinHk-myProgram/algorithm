//javascript sorting an array into ascending order.

for(let i=1;i<=nums.length-1;i++){
      for(let j=i;j>=1;j--){
        if(nums[j]<nums[j-1]){
           let temp = nums[j-1];
           nums[j-1] = nums[j];
           nums[j] = temp;
         } 
       }
}

//or 

for(let i=1;i<=nums.length-1;i++){
      for(let j=i;j>=1;j--){
        if(nums[j]<nums[j-1]){
           nums[j] = nums[j] + nums[j-1];
           nums[j-1] = nums[j] - nums[j-1];
           nums[j] = nums[j] - nums[j-1];
         } 
       }
}


// using sort() method in js
arr.sort((a, b) => a-b);        //sort in ascending order
arr.sort((a, b) => b-a);        //sort in decending order


