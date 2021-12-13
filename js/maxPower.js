/**
 * @param {string} s
 * @return {number}
 */
var maxPower = s => {
    let count = 1, max = 1
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            count++
        }
        else if (s[i] != s[i + 1]) {
            count = 1
        }
        if (count > max) {
            max = count
        }
    }
    return max
}