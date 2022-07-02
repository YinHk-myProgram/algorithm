//Creating the Node in binary tree
class TreeNode {
    constructor(data) {
        this.data = data;   // node value
        this.left = null;   // left node child reference
        this.right = null;  // right node child reference
    }
}

//or
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}

// create tree object
const tree = new TreeNode()

/* insert node */
insert(data) {
    let newNode = new Node(data);

    if(this.root === null) {
        this.root = newNode;
    } else {
        this.insertNode(this.root, newNode); // helper method below
    }
}

insertNode(node, newNode) {
    if(newNode.data < node.data) {
        if(node.left === null) {
            node.left = newNode;
        } else {
            this.insertNode(node.left, newNode);
        }
    } else {
        if(node.right === null) {
            node.right = newNode;
        } else {
            this.insertNode(node.right, newNode);
        }
    }
}


/* remove a node */
remove(data) {
    this.root = this.removeNode(this.root, data); // helper method below
}

removeNode(node, data) {
    if(node === null) {
        return null;
    // if data to be deleted is less than the root's data, move to the left subtree
    } else if(data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    // if data to be deleted is greater than the root's data, move to the right subtree
    } else if(data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;
    // if data is similar to the root's data, delete the node
    } else {
        // delete node with no children (leaf node)
        if(node.left === null && node.right === null) {
            node = null;
            return node;
        }

        // delete node with one child
        if(node.left === null) {
            node = node.right;
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        }

        // delete node with two children
        // minimum node of the right subtree is stored in newNode
        let newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
    }
}



