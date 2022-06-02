import sleep from "../utils/sleep";

export default async function bubbleSort (graphObject, speed) {
    let unsortedDivs = graphObject.numDivs;

    while (!graphObject.sorted) {
        if (graphObject.stop) {
            graphObject.resetSort();
            return;
        }
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
                if (graphObject.stop) {
                    graphObject.resetSort();
                    return;
                }
                graphObject.swap(bar1, bar2, speed);
                [graphObject.bars[i], graphObject.bars[j]] = [graphObject.bars[j], graphObject.bars[i]]
            }
            await sleep(speed)
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

export function describeBubbleSort() {
    const pTag = document.createElement("p");
    pTag.id = "bubble-desc"
    pTag.classList.add("sort-description");
    pTag.innerText = 
    `Bubble Sort is a popular sorting algorithm that loops from the beginning of an array and tries to find
    the largest element and "bubbles" it to the end of the array. Take a look at the graph and pay close attention
    the "swapping" color. Notice how it loops from the beginning and carries the largest element to the end of
    the array. Bubble Sort will do this until all the elements are sorted.`

    return pTag;
}