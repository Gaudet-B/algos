/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
    const searchMatrix = (matrix, target) => {
    
    const binarySearch = (row, target) => {
        
        let min = 0
        let max = row.length
        
        while (min < max) {
            const pivot = min + Math.floor((max - min) / 2)
            if (row[pivot] === target) return true
            else {
                if (target > row[pivot]) min = pivot + 1
                else max = pivot
            }
        }
        return false
    }
    
    if (matrix.length === 0) return false
    if (target === matrix[0][0]) return true
    if (target > matrix[0][0] && target < matrix[0][matrix[0].length]) return binarySearch(matrix[0], target)
    
    let min = 0
    let max = matrix.length
    
    while (min < max) {
        const pivot = min + Math.floor((max - min) / 2)
        if (matrix[pivot][0] === target) return true
        else {
            if (target < matrix[pivot][0]) max = pivot
            else {
                if (!binarySearch(matrix[pivot], target)) {
                    min = pivot + 1
                }
                else return true
            }
        }
        
    }
    
    return false
    
};