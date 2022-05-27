function mergeSort (array) {
    if (array.length < 2) return array;

    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const resultArray = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            resultArray.push(left.shift())
        } else {
            resultArray.push(right.shift())
        }
    }
    return resultArray.concat(left, right);
}