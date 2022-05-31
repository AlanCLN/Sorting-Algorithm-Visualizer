// import Bar from "./scripts/classes/bar"
import Graph from "./scripts/classes/graph";
import bubbleSort from "./scripts/algos/bubblesort";
import quickSort from "./scripts/algos/quicksort";
import sleep from "./scripts/utils/sleep";


document.addEventListener('DOMContentLoaded', () => {

    const graphObject = new Graph(10);
    // quickSort(graphObject, 0, graphObject.numDivs - 1);

    const playBtn = document.querySelector('.play');

    playBtn.addEventListener('click', (e)=>{

        if (e.target.classList.contains("pause")) {
            e.target.classList.remove("pause");
            // add pause alg here
        } else {
            e.target.classList.add("pause");
            async function removePauseAfterSorted () {
                // await bubbleSort(graphObject, 20);
                await quickSort(graphObject, 0, graphObject.numDivs - 1);
                e.target.classList.remove("pause");
                // graphObject.generateGraph();
            }
            removePauseAfterSorted();
        }
    })

})