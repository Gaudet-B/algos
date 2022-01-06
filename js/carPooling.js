const carPooling = (trips, capacity) => {
    trips = trips.sort((a,b)=>(a[1]-b[1]))
    let stop = 0
    let passengers = 0
    let exit = 0
    let stops = {}
    let lastStop = 0
    console.log(trips)
    for (let i = 0; i < trips.length; i++){
        stop = trips[i][1]
        for (let j = lastStop + 1; j < stop; j++){
            if (stops[j]){
                passengers -= stops[j]
            }
        }
        if (stops[stop] && lastStop != stop){
            passengers -= stops[stop]
        }
        passengers += trips[i][0]
        if (passengers > capacity){
            return false
        }
        exit = trips[i][2]
        if (stops[exit]){
            stops[exit] += trips[i][0]
        } else stops[exit] = trips[i][0]
        lastStop = stop

    }
    return true

}