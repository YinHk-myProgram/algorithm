const intersection = (nums1, nums2) => {
    let res = [];
    
   nums1.forEach((item) => {
       if(nums2.includes(item)) {
         if(!res.includes(item)) res.push(item);
       } 
    });
    
    return res;
};
