const prompt = require('prompt-sync')();

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    createTree() {
        let data = prompt("Enter the data for the node (or type 'null' for no node): ");
        if (data.toLowerCase() === "null") {
            return null; // Base case for recursion
        }

        let newNode = new Node(data);
        console.log(`Enter left child for ${data}:`);
        newNode.left = this.createTree();
        console.log(`Enter right child for ${data}:`);
        newNode.right = this.createTree();

        return newNode;
    }

    buildTree() {
        this.root = this.createTree();
    }

    // Function to print the tree in-order
    inorderTraversal(node) {
        if (node === null) return;
        this.inorderTraversal(node.left);
        console.log(node.data);
        this.inorderTraversal(node.right);
    }

    // Function to print the tree preordered
    // preorder: root, left, right
    // Pre-order traversal is used to create a copy of the tree
    preorderTraversal(node) {
        if (node === null) return;
        console.log(node.data);
        this.preorderTraversal(node.left);
        this.preorderTraversal(node.right);
    }

    // Function to print the tree postordered
    // postorder: left, right, root
    // Post-order traversal is used to delete the tree
    postorderTraversal(node) {
        if (node === null) return;
        this.postorderTraversal(node.left);
        this.postorderTraversal(node.right);
        console.log(node.data);
    }

    // Function to print the tree in-order 
    // inorder: left, root, right
    // In-order traversal is used to get the elements in sorted order
    inorderTraversal(node) {
        if (node === null) return;
        this.inorderTraversal(node.left);
        console.log(node.data);
        this.inorderTraversal(node.right);
    }

    printTree() {
        console.log("In-order Traversal of Tree:");
        this.inorderTraversal(this.root);
    }
}

// Run the program
