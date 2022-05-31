import sleep from "../utils/sleep";

async function quickSort (graphObject, low, high) {

    if (low < high) {
        const p = await partition(graphObject, low, high);
        await quickSort(graphObject, low, (p - 1));
        await quickSort(graphObject, (p + 1), high);
    }
    debugger
}

async function partition (graphObject, low, high) {
    let i = low - 1;
    let pivotDiv = graphObject.bars[high];
    let pivotValue = parseInt(pivotDiv.dataset.value);


    for (let j = low; j < high; j++) {

        let jBarValue = parseInt(graphObject.bars[j].dataset.value);
        let jBar = graphObject.bars[j];

        graphObject.check(jBar, pivotDiv);
        debugger

        if (jBarValue < pivotValue) {
            i++;
            await sleep(100);
            swap(graphObject.bars[i], graphObject.bars[j]);
            [graphObject.bars[i], graphObject.bars[j]] = [graphObject.bars[j], graphObject.bars[i]];
        }
        graphObject.uncheck(jBar, pivotDiv);
    }
    await sleep(100);
    swap(graphObject.bars[i + 1], graphObject.bars[high]);
    [graphObject.bars[i + 1], graphObject.bars[high]] = [graphObject.bars[high], graphObject.bars[i + 1]];

    

    return (i + 1);
}

function swap(bar1, bar2) {  // takes in two bar divs and swaps them
    const afterBar2 = bar2.nextElementSibling;
    const parent = bar2.parentNode;

    bar1.replaceWith(bar2);
    parent.insertBefore(bar1, afterBar2);
}

export default quickSort;