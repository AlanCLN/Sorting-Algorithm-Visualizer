import sleep from "../utils/sleep";

function quickSort (graphObject, low, high) {
    if (low < high) {
        let p = partition(graphObject, low, high);
        quickSort(graphObject.bars, low, (p - 1));
        quickSort(graphObject.bars, (p + 1), high);
    }
}

function partition (graphObject, low, high) {
    let i = low;
    let pivotDiv = graphObject.bars[high];
    let pivotValue = parseInt(pivotDiv.dataset.value);


    for (let j = low; j < high; j++) {
        // graphObject.check(graphObject.bars[j], )

        let jBarValue = parseInt(graphObject.bars[j].dataset.value);

        if (jBarValue <= pivotValue) {
            [graphObject.bars[i], graphObject.bars[j]] = [graphObject.bars[j], graphObject.bars[i]];
            swap(graphObject.bars[i], graphObject.bars[j]);
            i++;
        }
    }
    debugger
    [graphObject.bars[i], graphObject.bars[high]] = [graphObject.bars[high], graphObject.bars[i]];
    swap(graphObject.bars[i], pivotDiv)
    return i;
}

function swap(bar1, bar2) {  // takes in two bar divs and swaps them
    const afterBar2 = bar2.nextElementSibling;
    const parent = bar2.parentNode;

    bar1.replaceWith(bar2);
    parent.insertBefore(bar1, afterBar2);
}

export default quickSort;