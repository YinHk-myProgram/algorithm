/* 
    Finde interection of elements in the pool
    nums1 = [1,2,2,1], nums2 = [2,2]
    intersection => [2,2]
 */

const intersect = (nums1, nums2) => {
   let res = [];
    
   nums1.forEach((item) => {
       if(nums2.includes(item)) {
         res.push(item);
         nums2.splice(nums2.indexOf(item), 1);
       } 
    });
    
    return res;
};

