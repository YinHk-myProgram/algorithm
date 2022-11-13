// path sum 2
/* 
    Find all root-to-leaf paths where each path's sum equals the given sum.
    eg:    targetSum = 22
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1

[ [5,4,11,2], [5,8,4,5] ]

*/

const pathSum = (root, targetSum) => {
    let res = [];
    const getPath = (node,target, list) => {
      
     if(!node)  return;  // stop program for no node
     
     list.push(node.val)
     if(node.val === target && !node.left && !node.right){
       res.push([...list])                                // check if the node value == the remain value in total sum
       return;
     }
        
     getPath(node.left, target - node.val, [...list]);    // for every left node recurssion
     getPath(node.right, target - node.val, [...list]);   // for every rigft node recurssive
        
   }
    
   getPath(root, targetSum, []);
   return res;
    
};

