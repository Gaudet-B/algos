/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
    let difference = x ^ y;
    let count = 0;
    while (difference > 0) {
        difference = difference & difference - 1
        count++;
    }
    return count;
};