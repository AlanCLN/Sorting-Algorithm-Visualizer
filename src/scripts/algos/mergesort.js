function mergeSort (arr, start, end) {

    if (start < end) {

        let mid = Math.floor((start + end)/ 2);

        mergeSort(arr, start, mid);
        mergeSort(arr, mid + 1, end);

        merge(arr, start, mid, end);
    }
}

function merge (arr, start, mid, end) {

    let start2 = mid + 1;  // second pointer

    if (arr[mid] <= arr[start2]) return;

    while (start <= mid && start2 <= end) {
        if (arr[start] <= arr[start2]) {
            start++;
        } else {

            let value = arr[start2];
            let index = start2;

            while (index !== start) {
                arr[index] = arr[index - 1];
                index--;
            }
            arr[start] = value;

            start++;
            mid++;
            start2++;
        }
    }
}

let arr = [17, 8, 12, 21, 9, 11, 15, 3];
let arr2 = [12, 11, 13, 5, 6, 7];

console.log(arr)
mergeSort(arr, 0, arr.length - 1);
console.log(arr);