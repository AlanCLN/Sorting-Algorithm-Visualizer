
async function bubbleSort (graphObject) {
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < graphObject.numDivs - 1; i++) { 
            let j = i + 1;

            const bar1 = graphObject.bars[i];
            const bar2 = graphObject.bars[j];

            graphObject.check(bar1, bar2);

            let bar1Value = parseInt(graphObject.bars[i].dataset.value);
            let bar2Value = parseInt(graphObject.bars[j].dataset.value);
            
            if (bar1Value > bar2Value) {
                sorted = false;
                [graphObject.bars[i], graphObject.bars[j]] = [graphObject.bars[j], graphObject.bars[i]]
                await swap(bar1, bar2);
            }
            graphObject.uncheck(bar1, bar2)
        }
    }
    return graph;
}


function swap(bar1, bar2) {  // takes in two bar divs and swaps them
    const afterBar2 = bar2.nextElementSibling;
    const parent = bar2.parentNode;

    bar1.replaceWith(bar2);
    parent.insertBefore(bar1, afterBar2);
}

export default bubbleSort;