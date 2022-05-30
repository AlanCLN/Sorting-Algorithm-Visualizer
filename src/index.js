// import Bar from "./scripts/classes/bar"
import Graph from "./scripts/classes/graph";
import bubbleSort from "./scripts/algos/bubblesort";


document.addEventListener('DOMContentLoaded', () => {

    const graphObject = new Graph(10);

    bubbleSort(graphObject)

})