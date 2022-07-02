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


