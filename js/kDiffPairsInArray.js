/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findPairs = (nums, k) => {

    let pairs = []

    for (let i = 0; i < nums.length; i++) {

        for (let j = 0; j < nums.length; j++) {

            if (i != j && nums[j] - nums[i] === Math.abs(k) && !pairs.includes(nums[i] + nums[j])) {
                pairs.push(nums[i] + nums[j])
            }

        }
    }

    return pairs.length
}