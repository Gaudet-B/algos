
// Definition for a binary tree node.
class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const  invertTree = (root) => {
    if (root == null) return root
    if (root.left != null) {
        invertTree(root.left)
    } else if (root.right != null) {
        invertTree(root.right)
    }
    let temp = root.left
    root.left = root.right
    root.right = temp
    return root
}