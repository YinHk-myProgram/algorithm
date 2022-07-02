const inorderTraversal = root => {
    let list = [];
    //recurrsion method
    const inorder = node => {
        if(node) {
            inorder(node.left);
            list.push(node.val);
            inorder(node.right);
        }
    }
    if(root)  inorder(root);
    return list;
};

