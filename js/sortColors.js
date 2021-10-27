// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const sortColors = (nums) => {
    let count = 0
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < nums.length - count; j++) {
            if (nums[j] == 1 && i == 0) {
                nums.splice(j, 1)
                nums.push(1)
                count++
                j--
            }
            if (nums[j] == 2 && i == 1) {
                nums.splice(j, 1)
                nums.push(2)
                count++
                j--
            }
        }
    }
}