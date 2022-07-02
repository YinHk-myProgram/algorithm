// level order traversal
/*  
    
      3
     / \
    9  20
   /     \
 15       7

 [[3],[9,20],[15,7]] 3 is level 1,  9 and 20 are level 2, 15 and 7 are level 3

*/

const levelOrder = root => {
    let res = [];
    let level = 0;   //starting level begin from 0
    
    const dfs = (node, level) => {
       if(node) {
         if(!res[level])  res.push([]);
         res[level].push(node.val);
         dfs(node.left, level+1);
         dfs(node.right, level+1); 
       }  
    } 
    dfs(root, 0);
    return res;
};

