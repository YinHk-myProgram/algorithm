const preorderTraversal = root => {
    let list = [];
    //recurrsion 
    const preorder = node => {
        if(node) {
            list.push(node.val);
            preorder(node.left);
            preorder(node.right);
        }
    }
    preorder(root);
    return list;
};


