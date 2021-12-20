/**
 * @param {number[]} arr
 * @return {number[][]}
 */
const minimumAbsDifference = arr => {

    let sorted = arr.sort((x, y) => x - y)
    let returnArr = []
    let minDiff = sorted[1] - sorted[0]

    for (let i = 0; i < sorted.length - 1; i++) {
        minDiff = Math.min(minDiff, (sorted[i + 1] - sorted[i]))
    }

    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i + 1] - sorted[i] === minDiff) {
            returnArr.push([sorted[i]. sorted[i+1]])
        }
    }

    return returnArr

}