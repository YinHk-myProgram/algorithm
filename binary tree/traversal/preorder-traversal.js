const preorderTraversal = root => {
    let list = [];
    //recurrsion method
    const preorder = node => {
        if(node) {
            list.push(node.val);
            preorder(node.left);
            preorder(node.right);
        }
    }
    if(root)  preorder(root);
    return list;
};


