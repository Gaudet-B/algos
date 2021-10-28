// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
    let arrOutput = []
    nums.sort((a, b) => (a - b))
    for (let i = 0; i < nums.length - 2; i++) {
        if (i != 0 && nums[i - 1] == nums[i]) {
            continue
        }
        let j = i + 1
        let k = nums.length - 1
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] == 0) {
                arrOutput.push([nums[i], nums[j], nums[k]])
                j++
                k--
                while (j < k && nums[j - 1] == nums[j]) {
                    j++
                }
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                j++
            } else {
                k--
            }
        }
    }
    return arrOutput
};