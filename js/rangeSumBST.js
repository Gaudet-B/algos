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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const rangeSumBST = (root, low, high) => {
    if (root == null) return 0
    let sum = 0
    if (root.val <= high && root.val >= low) {
        sum = root.val
    }
    return sum + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
}