import sleep from "../utils/sleep";

export default async function mergeSort(graphObject, start, end) {

    if (start < end) {

        let mid = Math.floor((start + end)/ 2);

        await mergeSort(graphObject, start, mid);
        await mergeSort(graphObject, mid + 1, end);

        await merge(graphObject, start, mid, end);

        graphObject.mergeSortCounter += 1;

        // if the counter is number of bars - 1, the mergeSort is sorted.
        if (graphObject.mergeSortCounter === graphObject.numDivs - 1) {
            graphObject.bars.forEach(bar => {
                if (!bar.classList.contains("sorted")) {
                    bar.classList.add("sorted");
                }
            })
        }
    }
}

async function merge (graphObject, start, mid, end) {

    let speed = 33 // delete when speed is configured

    let start2 = mid + 1;  // second pointer
    // console.log(graphObject.bars[start2]);

    let midBarValue = parseInt(graphObject.bars[mid].dataset.value);
    let start2BarValue = parseInt(graphObject.bars[start2].dataset.value);

    if (midBarValue <= start2BarValue) {
        graphObject.check(graphObject.bars[mid], graphObject.bars[start2]);
        await sleep(speed)
        graphObject.uncheck(graphObject.bars[mid], graphObject.bars[start2]);
        return;
    }

    while (start <= mid && start2 <= end) {

        let startBarValue = parseInt(graphObject.bars[start].dataset.value);
            start2BarValue = parseInt(graphObject.bars[start2].dataset.value);

        // checking if the first element is in the right place
        if (startBarValue <= start2BarValue) {
            graphObject.check(graphObject.bars[start], graphObject.bars[start2]);
            await sleep(speed)
            graphObject.uncheck(graphObject.bars[start], graphObject.bars[start2]);
            start++;
        } else {
            let index = start2;
            while (index !== start) {
                
                [graphObject.bars[index - 1], graphObject.bars[index]] = [graphObject.bars[index], graphObject.bars[index - 1]];
                await graphObject.swap(graphObject.bars[index], graphObject.bars[index - 1], speed);

                index--;
            }

            start++;
            mid++;
            start2++;
        }
    }
}