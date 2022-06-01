import sleep from "../utils/sleep";

export default async function quickSort (graphObject, low, high, speed) {


    if (low < high) {
        const p = await partition(graphObject, low, high, speed);
        if (p === -1) {  // if p returns -1, that means it returned early because of a stop btn.
            graphObject.resetSort();
            return -1;
        }
        const resLeft = await quickSort(graphObject, low, (p - 1), speed);
        if (resLeft === -1) { // resLeft and resRight are meant to return early out of the callstack
            graphObject.resetSort();
            return -1;
        }
        graphObject.bars.slice(low, p + 1).forEach(bar => {
            if (!bar.classList.contains("sorted")) {
                bar.classList.add("sorted");
            }
        })
        const resRight = await quickSort(graphObject, (p + 1), high, speed);
        if (resRight === -1) {  // resLeft and resRight are meant to return early out of the callstack
            graphObject.resetSort();
            return -1;
        }
        graphObject.bars.slice(p + 1, high + 1).forEach(bar => {
            if (!bar.classList.contains("sorted")) {
                bar.classList.add("sorted");
            }
        })
    };

    if (graphObject.numSortedDivs() === graphObject.numDivs) graphObject.sorted = true;
    // numSortedDivs is a helper function created below

}

async function partition (graphObject, low, high, speed) {
    let i = low - 1;
    let pivotDiv = graphObject.bars[high];
    let pivotValue = parseInt(pivotDiv.dataset.value);


    for (let j = low; j < high; j++) {
        
        let jBarValue = parseInt(graphObject.bars[j].dataset.value);
        let jBar = graphObject.bars[j];
        
        if (graphObject.stop) {
            graphObject.resetSort();
            return -1;
        }
        graphObject.check(jBar, pivotDiv);
        
        await sleep(speed);

        if (jBarValue < pivotValue) {
            if (graphObject.stop) {
                graphObject.resetSort();
                return -1;
            }
            i++;
            graphObject.swap(graphObject.bars[i], graphObject.bars[j], speed);
            [graphObject.bars[i], graphObject.bars[j]] = [graphObject.bars[j], graphObject.bars[i]];
        }
        await sleep(speed);
        graphObject.uncheck(jBar, pivotDiv);
    }

    graphObject.swap(graphObject.bars[i + 1], graphObject.bars[high]);
    [graphObject.bars[i + 1], graphObject.bars[high]] = [graphObject.bars[high], graphObject.bars[i + 1]];

    return (i + 1);
}

export function describeQuickSort() {
    const pTag = document.createElement("p");
    pTag.id = "quick-desc";
    pTag.classList.add("sort-description");
    pTag.innerText = 
    `Quick Sort is a highly efficient sorting algorithm that takes a divide and conquer approach. It takes a pivot 
    element and partitions the array by putting all the smaller elements (compared to the pivot) on one side and all
    the larger elements on the other. In our case, we are going left to right - smallest to largest. It will recursively
    partition the left side until we hit a base case (an array of size 0 or 1 is by definition, sorted) before attempting
    to sort the array. Notice in the graph that we will partition all the way down the left side and then start sorting
    from the left before going to the right side.`

    return pTag;
}