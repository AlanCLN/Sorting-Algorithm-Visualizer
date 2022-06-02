// import Bar from "./scripts/classes/bar"
import Graph from "./scripts/classes/graph";
import bubbleSort from "./scripts/algos/bubblesort";
import { describeBubbleSort } from "./scripts/algos/bubblesort";
import quickSort from "./scripts/algos/quicksort";
import sleep from "./scripts/utils/sleep";
import Control from "./scripts/classes/control";
import mergeSort from "./scripts/algos/mergesort";


document.addEventListener('DOMContentLoaded', () => {

    const graphObject = new Graph(10);
    const control = new Control(graphObject);

    // default control values
    control.size = 10;
    control.speed = 100;
    control.alg = "bubble";

    const newArrayBtn = document.getElementById("new-array-button");
    newArrayBtn.addEventListener('click', e => control.handleNewArray());




    // SIZE CONTROLS
    const smallSizeBtn = document.getElementById("10");
    const midSizeBtn = document.getElementById("25");
    const largeSizeBtn = document.getElementById("50");
    smallSizeBtn.addEventListener('click', e => control.handleSizeControl(e));
    midSizeBtn.addEventListener('click', e => control.handleSizeControl(e));
    largeSizeBtn.addEventListener('click', e => control.handleSizeControl(e));

    // SPEED CONTROLS
    const slowSpeedBtn = document.getElementById("1");
    const midSpeedBtn = document.getElementById("2");
    const fastSpeedBtn = document.getElementById("3");
    slowSpeedBtn.addEventListener('click', e => control.handleSpeedControl(e));
    midSpeedBtn.addEventListener('click', e => control.handleSpeedControl(e));
    fastSpeedBtn.addEventListener('click', e => control.handleSpeedControl(e));

    // ALGORITHM CONTROLS
    const bubbleSortBtn = document.querySelector("#bubble");
    const quickSortBtn = document.querySelector("#quick");
    const mergeSortBtn = document.querySelector("#merge");
    bubbleSortBtn.addEventListener('click', e => control.handleAlgControl(e));
    quickSortBtn.addEventListener('click', e => control.handleAlgControl(e));
    mergeSortBtn.addEventListener('click', e => control.handleAlgControl(e));



    const descriptionContainer = document.getElementById("description-container");

    const bubbleSortP = describeBubbleSort();

    descriptionContainer.append(bubbleSortP);

    const playBtnContainer = document.querySelector('.play-btn-container');
    playBtnContainer.addEventListener('click', e => control.handlePlayBtn(e))
})