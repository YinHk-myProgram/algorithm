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
    if(root) return pathSum(root, targetSum);
     else return false;
};

const pathSum = (root, sum) => { 
   if(!root) return false;
   if(!root.left && !root.right) return root.val === sum;
    else return pathSum(root.left, sum-root.val) ||  pathSum(root.right, sum-root.val);  //return left if true, otherwise return right
}
