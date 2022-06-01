import sleep from "../utils/sleep";

export default async function mergeSort(graphObject, start, end, speed) {
    if (graphObject.stop) {
        graphObject.resetSort();
        return -1;
    }

    if (start < end) {

        let mid = Math.floor((start + end)/ 2);

        const resLeft = await mergeSort(graphObject, start, mid, speed);
        if (resLeft === -1) { // resLeft and resRight are meant to return early out of the callstack
            graphObject.resetSort();
            return -1;
        }
        const resRight = await mergeSort(graphObject, mid + 1, end, speed);
        if (resLeft === -1) { // resLeft and resRight are meant to return early out of the callstack
            graphObject.resetSort();
            return -1;
        }
        const resMerge = await merge(graphObject, start, mid, end, speed);
        if (resMerge === -1) { // resLeft and resRight are meant to return early out of the callstack
            graphObject.resetSort();
            return -1;
        }


        graphObject.mergeSortCounter += 1;

        // if the counter reaches number of bars - 1, the mergeSort is sorted.
        // reason is because if we split an array of 25 bars into 25 arrays of 1 element,
        // it would take 24 merges to put them back together into 1 array.
        if (graphObject.mergeSortCounter === graphObject.numDivs - 1) {
            graphObject.bars.forEach(bar => {
                if (!bar.classList.contains("sorted")) {
                    bar.classList.add("sorted");
                }
            })
            graphObject.sorted = true;
        }
    }
}

async function merge (graphObject, start, mid, end, speed) {
    if (graphObject.stop) {
        graphObject.resetSort();
        return -1;
    }

    let start2 = mid + 1;  // second pointer
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
                if (graphObject.stop) {
                    graphObject.resetSort();
                    return -1;
                }
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

export function describeMergeSort() {
    const pTag = document.createElement("p");
    pTag.id = "merge-desc";
    pTag.classList.add("sort-description");
    pTag.innerText = 
    `Merge Sort is also a divide and conquer algorithm. It recurisvely divides the array into halves until you end up
    with a bunch of single element arrays. (i.e. an array of 10 elements will end up into 10 arrays of 1 element each)
    We then call on a merge helper function that will help us recursively merge the sorted arrays. Set the graph to an
    array of size 50 at a 3x speed and notice towards the end of the visualizer you will see what seems like two sorted
    arrays getting merged.`

    return pTag;
}