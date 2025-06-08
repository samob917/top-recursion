function mergesort(arr) {
    let sorted = []
    let len = arr.length;
    let midpt = Math.floor(len/2);
    let lArr = arr.slice(0, midpt)
    let rArr = arr.slice(midpt)
    if (len == 1) {
        sorted.push(arr[0])
        return sorted
    } else {
        let lSorted = mergesort(lArr);
        let rSorted = mergesort(rArr);
        let i = 0;
        let j = 0;
        while (sorted.length < lSorted.length + rSorted.length) {
        if (lSorted[i] < rSorted[j]) {
            sorted.push(lSorted[i])
            if (i < lSorted.length-1) {
                i++
            } else {
                return sorted.concat(rSorted.slice(j))
            }
        } else {
            sorted.push(rSorted[j])
            if (j < rSorted.length-1) {
                j++
            } else {
                return sorted.concat(lSorted.slice(i))
            }
        }
    }
        
    }
    
}

console.log(mergesort([3, 2, 1, 13, 8, 5, 0, 1]))