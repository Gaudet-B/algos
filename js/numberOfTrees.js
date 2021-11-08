/**
 * @param {number} n
 * @return {number}
 */
const numTrees = n => {
    if (n <= 1) return 1
    let totalCount = 0, leftCount = 0, rightCount = 0
    for (let i = 1; i <= n; i++) {
        leftCount = numTrees(i - 1)
        rightCount = numTrees(n - i)
        totalCount += (leftCount * rightCount)
    }
    return totalCount
}

console.log(`RETURN: ${numTrees(5)}`)