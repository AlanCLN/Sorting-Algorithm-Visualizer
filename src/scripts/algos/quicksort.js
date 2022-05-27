function quickSort (array) {
    if (array.length < 2) return array;
    
    const pivotIdx = Math.floor(Math.random() * array.length);
    const slicedArray = array.slice(0, pivotIdx).concat(array.slice(pivotIdx + 1))
    const pivot = array[pivotIdx]
    const left = [];
    const right = [];

    for (let i = 0; i < slicedArray.length; i++) {
        if (slicedArray[i] < pivot) {
            left.push(slicedArray[i]);
        } else {
            right.push(slicedArray[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}