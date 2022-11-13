//path sum
/*   target = 22
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1

*/

const hasPathSum = (root, targetSum) => {
   return pathSum(root, targetSum);
};

const pathSum = (root, sum) => { 
   if(!root) return false; 
   if(!root.left && !root.right) return root.val === sum;       // check if the node value == the remain value in total sum
    else return pathSum(root.left, sum-root.val) || pathSum(root.right, sum-root.val);  //return left if true, otherwise return right
}
