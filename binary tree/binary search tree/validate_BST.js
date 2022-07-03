const isValidBST = root => {
    
    const helper = (node, min, max) => {
      
      if(node) {
        if((min !== null && node.val <= min) || (max !== null && node.val >= max)) return false;
        return helper(node.left, min, node.val) && helper(node.right, node.val, max);
      } else return true; 
      
    }
    
    return helper(root, null, null);
};

