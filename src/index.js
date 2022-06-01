// import Bar from "./scripts/classes/bar"
import Graph from "./scripts/classes/graph";
import bubbleSort from "./scripts/algos/bubblesort";
import { describeBubbleSort } from "./scripts/algos/bubblesort";
import quickSort from "./scripts/algos/quicksort";
import sleep from "./scripts/utils/sleep";
import Control from "./scripts/classes/control";


document.addEventListener('DOMContentLoaded', () => {

    const playBtn = document.querySelector('.play');
    const graphObject = new Graph(25);
    const control = new Control(graphObject);

    const descriptionContainer = document.getElementById("description-container");

    const bubbleSortP = describeBubbleSort();

    descriptionContainer.append(bubbleSortP);

















    playBtn.addEventListener('click', e => control.handlePlayBtn(e))
})