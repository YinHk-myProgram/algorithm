### In-Order Traversal
> An in-order traversal will **visit all nodes in ascending order, starting from a given node (optional)**, and perform the given callback function (also optional)

![](./in-order.png)
```
Inorder => Left, Root, Right.
Step 1 − Recursively traverse left subtree.
Step 2 − Visit root node.
Step 3 − Recursively traverse right subtree.
```
```js
inOrderTraverse(node, callback) {
    if(node != null) {
        this.inOrderTraverse(node.left, callback);
        callback(node.data);
        this.inOrderTraverse(node.right, callback);
    }
}
```

### Pre-Order Traversal
> A pre-order traversal **visits the node prior to its descendants**.

![](./pre-order.png)
```
Root, Left, Right.
Step 1 − Visit root node.
Step 2 − Recursively traverse left subtree.
Step 3 − Recursively traverse right subtree.
```
```js
preOrderTraverse(node, callback) {
    if(node != null) {
        callback(node.data);
        this.preOrderTraverse(node.left, callback);
        this.preOrderTraverse(node.right, callback);
    }
}
```

### Post-Order Traversal
> A post-order traversal **visits the node after its descendants**.

![](./post-order.png)
```
Post order => Left, Right, Root.
Step 1 − Recursively traverse left subtree.
Step 2 − Recursively traverse right subtree.
Step 3 − Visit root node.
```
```js
postOrderTraverse(node, callback) {
    if(node != null) {
        this.postOrderTraverse(node.left, callback);
        this.postOrderTraverse(node.right, callback);
        callback(node.data);
    }
}
```



