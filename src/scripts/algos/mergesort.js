export default async function mergeSort(graphObject, start, end) {

    if (start < end) {

        let mid = Math.floor((start + end)/ 2);

        mergeSort(graphObject, start, mid);
        mergeSort(graphObject, mid + 1, end);

        merge(graphObject, start, mid, end);
    }
}

async function merge (graphObject, start, mid, end) {

    let start2 = mid + 1;  // second pointer
    console.log(start2);
    debugger

    if (graphObject.barObjects[mid].value <= graphObject.barObjects[start2].value) {
        return;
    }

    while (start <= mid && start2 <= end) {
        if (graphObject.barObjects[start].value <= graphObject.barObjects[start2].value) {
            start++;
        } else {
            let index = start2;
            while (index !== start) {
                // debugger
                graphObject.swap(graphObject.bars[index - 1], graphObject.bars[index])

                [graphObject.barObjects[index], graphObject.barObjects[index - 1]] = [graphObject.barObjects[index - 1], graphObject.barObjects[index]];
                index--;
            }

            start++;
            mid++;
            start2++;
        }
    }
}