/**
 * @param {number[][]} grid
 * @return {number}
 */
const uniquePathsIII = grid => {
    if (grid[0] == undefined || grid[0][0] == undefined) return 0
    let length = grid[0].length
    let flatArr = grid.flat()
    let zeroCount = flatArr.filter(item => item == 0).length
    let y = Math.floor( (flatArr.indexOf(1)) / (flatArr.length / grid.length) )
    let x = flatArr.indexOf(1) - (y * length)
    let startCoord = [y, x]
    console.log(startCoord)
    return moveBot(y, x, grid, zeroCount)
}

const moveBot = (i, j, grid, zeroCount, moves = 0) => {
    if (grid[i] == undefined || grid[i][j] == undefined) return 0
    if (grid[i][j] == 2) {
        if (moves == (zeroCount + 1)) return 1
        return 0
    }
    if (grid[i][j] == 1 && moves > 0) return 0
    if (grid[i][j] == -1) return 0
    if (grid[i][j] == 0) {
        grid[i][j] = -1
    }
    moves++
    let paths = moveBot(i + 1, j, grid, zeroCount, moves) + moveBot(i - 1, j, grid, zeroCount, moves) + moveBot(i, j + 1, grid, zeroCount, moves) + moveBot(i, j - 1, grid, zeroCount, moves)
    grid[i][j] = 0
    return paths
}

var input = [[0,0,0,0,0,0,2,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0]]

console.log(uniquePathsIII(input))