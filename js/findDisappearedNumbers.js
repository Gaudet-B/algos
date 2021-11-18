/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = nums => {
    let returnArr = []
    for (let i = 1; i < nums.length + 1; i++) {
        if (!nums.includes(i)) {
            returnArr.push(i)
        }
    }
    return returnArr
}