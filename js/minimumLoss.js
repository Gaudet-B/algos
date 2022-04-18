const findMinPair = arr => {
    let min = Infinity
    let i = 0
    let j = arr.length - 1
    while (i < j) {
        (arr[i] > arr[j]) ? min = Math.min(arr[i] - arr[j], min) : min = min
        i++
    }
    return min
}
function minimumLoss(price) {
    let min = Infinity
    let i = 0
    let j = price.length
    while (i < j) {
        let priceArr = [...price]
        let arr = priceArr.slice(i, j)
        min = Math.min(findMinPair(arr), min)
        j--
    }
    return min
}