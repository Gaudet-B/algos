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
const sumNumbers = root => {
    let runner = root
    let numStr = ""
    let strArr = []
    let returnInt = 0
    traverseRecursive(root, numStr, strArr)
    for (let i = 0; i < strArr.length; i++) {
        returnInt += Number(strArr[i])
    }
    return returnInt
};

const traverseRecursive = (node, string, array) => {
    if (node == null) return
    string += node.val
    if (node.left == null && node.right == null) {
        array.push(string)
        return
    }
    traverseRecursive(node.left, string, array)
    traverseRecursive(node.right, string, array)
}