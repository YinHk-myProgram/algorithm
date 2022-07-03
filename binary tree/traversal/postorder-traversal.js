const postorderTraversal = root => {
    let list = [];
    //recurrsion
    const postorder = node => {
        if(node) {
            postorder(node.left);
            postorder(node.right);
            list.push(node.val);
        }
    }
    postorder(root);
    return list;
};

