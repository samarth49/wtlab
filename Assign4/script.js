class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this._insertRec(this.root, value);
  }

  _insertRec(node, value) {
    if (!node) return new TreeNode(value);
    if (value < node.value) node.left = this._insertRec(node.left, value);
    else if (value > node.value) node.right = this._insertRec(node.right, value);
    return node;
  }

  inorderTraversal() {
    const result = [];
    this._inorder(this.root, result);
    return result;
  }

  _inorder(node, result) {
    if (!node) return;
    this._inorder(node.left, result);
    result.push(node.value);
    this._inorder(node.right, result);
  }

  search(value) {
    return this._searchRec(this.root, value);
  }

  _searchRec(node, value) {
    if (!node) return false;
    if (node.value === value) return true;
    return value < node.value
      ? this._searchRec(node.left, value)
      : this._searchRec(node.right, value);
  }
}

const bst = new BST();

function insertNode() {
  const input = document.getElementById("valueInput");
  const value = parseInt(input.value);
  if (!isNaN(value)) {
    bst.insert(value);
    input.value = "";
    displayInorder();
    document.getElementById("searchResult").innerText = "";
  }
}

function displayInorder() {
  const sorted = bst.inorderTraversal();
  document.getElementById("inorderDisplay").innerText = sorted.join(", ");
}

function searchNode() {
  const input = document.getElementById("searchInput");
  const value = parseInt(input.value);
  const result = bst.search(value);
  document.getElementById("searchResult").innerText = result
    ? `✅ ${value} found in the tree.`
    : `❌ ${value} not found.`;
}
