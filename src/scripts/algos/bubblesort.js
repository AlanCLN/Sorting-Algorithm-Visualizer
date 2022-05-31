import sleep from "../utils/sleep";

async function bubbleSort (graphObject, speed) {
    // let sorted = false;
    let unsortedDivs = graphObject.numDivs;

    // while (!sorted) {
    while (!graphObject.sorted) {
        // sorted = true;
        graphObject.sorted = true;
        for (let i = 0; (i < graphObject.numDivs - 1) && (i < unsortedDivs - 1); i++) { 
            let j = i + 1;

            const bar1 = graphObject.bars[i];
            const bar2 = graphObject.bars[j];

            graphObject.check(bar1, bar2);
            await sleep(speed);

            let bar1Value = parseInt(graphObject.bars[i].dataset.value);
            let bar2Value = parseInt(graphObject.bars[j].dataset.value);

            if (bar1Value > bar2Value) {
                graphObject.sorted = false;
                swap(bar1, bar2);
                [graphObject.bars[i], graphObject.bars[j]] = [graphObject.bars[j], graphObject.bars[i]]
                await sleep(speed);
            }
            graphObject.uncheck(bar1, bar2)

            if (j === unsortedDivs - 1) {
                graphObject.bars[j].classList.add("sorted");
                unsortedDivs--;
            }
        }
    }
    graphObject.bars.forEach(bar => {
        if (!bar.classList.contains("sorted")) {
            bar.classList.add("sorted");
        }
    })
}


function swap(bar1, bar2) {  // takes in two bar divs and swaps them
    const afterBar2 = bar2.nextElementSibling;
    const parent = bar2.parentNode;

    bar1.replaceWith(bar2);
    parent.insertBefore(bar1, afterBar2);
}

export default bubbleSort;