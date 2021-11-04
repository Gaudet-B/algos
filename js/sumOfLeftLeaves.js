/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = (root, isLeft = false) => {
    if (root == null) return 0
    if (root.left == null && root.right == null && isLeft == true) return root.val
    return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right)
}