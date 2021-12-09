/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach = (arr, start) => {
    if (arr.length === 0) return false
    return recursive(arr, start)
}

const recursive = (arr, idx) => {
    if (arr[idx] === 0) {
        return true
    }
    if (arr[idx] < 0 || arr[idx] === undefined) {
        return false
    }
    let jump = arr[idx]
    arr[idx] = -1
    return recursive(arr, idx-jump) || recursive(arr, idx+jump)
}