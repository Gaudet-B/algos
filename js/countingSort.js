function countingSort(arr) {
    let frequencyObj = {}
    let frequencyArr = []
    for (let i = 0; i < arr.length; i++) {
        let tempFrequency
        frequencyObj[arr[i]] ? tempFrequency = frequencyObj[arr[i]] : tempFrequency = 0
        frequencyObj[arr[i]] = tempFrequency + 1
    }
    console.log(frequencyObj)
    
    for (let i = 0; i < 100; i++) {
        let frequency
        frequencyObj[i] ? frequency = frequencyObj[i] : frequency = 0
        frequencyArr.push(frequency)
    }
    
    return frequencyArr
}