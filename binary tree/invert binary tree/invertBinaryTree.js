const invertTree = = (root) => {
   
   const swapTree = (node) => {
      if(node){
        let temp = node.right;
        node.right = node.left;
        node.left = temp;
        swapTree(node.left);
        swapTree(node.right);
      }
   }
   
   swapTree(root);
   return root;
   
};

/*  

   eg: 
   
 
                1
              /    \
            2        3          
          /   \    /   \
        4      5  6      7

                |
                V
            
                 1
              /    \
            3        2
          /   \    /   \
        7      6  5      4
        
*/


