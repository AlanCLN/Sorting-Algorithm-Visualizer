import bubbleSort, { describeBubbleSort } from "../algos/bubblesort";
import mergeSort, { describeMergeSort } from "../algos/mergesort";
import quickSort, { describeQuickSort } from "../algos/quicksort";
import Graph from "./graph";

export default class Control {
    constructor(graphObject, size, speed, alg) {
        this.graphObject = graphObject;
        this.size = size;
        this.speed = speed;
        this.alg = alg;
        this.sorting = false;
    }

    async handlePlayBtn(e) {
        const playBtn = document.querySelector(".play");
        if (playBtn.classList.contains("stop")) {
            playBtn.classList.remove("stop");
            this.graphObject.stop = true;
        } else if (this.graphObject.sorted === false) {
            playBtn.classList.add("stop");
            if (this.alg === "bubble") {
                this.sorting = true;
                await bubbleSort(this.graphObject, this.speed)
                this.sorting = false;
            } else if (this.alg === "quick") {
                this.sorting = true;
                await quickSort(this.graphObject, 0, this.graphObject.numDivs - 1, this.speed);
                this.sorting = false;
            } else if (this.alg === "merge") {
                this.sorting = true;
                await mergeSort(this.graphObject, 0, this.graphObject.numDivs - 1, this.speed);
                this.sorting = false;
            }
            playBtn.classList.remove("stop");
        }
    }

    handleAlgControl(e) {
        if (this.sorting === false) {
            if (e.currentTarget.id === "bubble") {
                this.graphObject = new Graph(this.size);
                this.selectAlgControl(e);
            } else if (e.currentTarget.id === "quick") {
                this.graphObject = new Graph(this.size);
                this.selectAlgControl(e);
            } else if (e.currentTarget.id === "merge") {
                this.graphObject = new Graph(this.size);
                this.selectAlgControl(e);
            }
        } else {
            this.graphObject.stop = true;
            this.graphObject = new Graph(this.size);
            this.selectAlgControl(e);
        }
    }
    resetAlgControl() {
        const algControlParent = document.getElementById("alg-control");
        // this returns an HTML collect. Must use a for loop instead of an each loop
        const algControlChildren = algControlParent.children;
        
        for (let i = 0; i < algControlChildren.length; i++) {
            algControlChildren[i].classList.remove("alg-selected");
        }
    }
    selectAlgControl(e) {
        this.resetAlgControl();
        e.currentTarget.classList.add("alg-selected");
        this.alg = e.currentTarget.id;
        this.selectDescription(e);
    }

    handleSpeedControl(e) {
        if (this.sorting === false) {
            if (e.currentTarget.id === '1') {
                this.selectSpeedControl(e)
                this.speed = 100;
            } else if (e.currentTarget.id === '2') {
                this.selectSpeedControl(e)
                this.speed = 50;
            } else if (e.currentTarget.id === '3') {
                this.selectSpeedControl(e)
                this.speed = 20;
            }
        }
    }
    resetSpeedControl() {
        const speedControlParent = document.getElementById("speed-control");
        const speedControlChildren = speedControlParent.children;

        for (let i = 1; i < speedControlChildren.length; i++) {
            speedControlChildren[i].classList.remove("speed-selected");
        }
    }
    selectSpeedControl(e) {
        this.resetSpeedControl();
        e.currentTarget.classList.add("speed-selected");
    }

    handleSizeControl(e) {
        if (this.sorting === false) {
            if (e.currentTarget.id === '10') {
                this.selectSizeControl(e);
                let new10 = new Graph(10);
                this.graphObject = new10;
                this.size = 10;
            } else if (e.currentTarget.id === '25') {
                this.selectSizeControl(e);
                let new25 = new Graph(25);
                this.graphObject = new25;
                this.size = 25;
            } else if (e.currentTarget.id === '50') {
                this.selectSizeControl(e);
                let new50 = new Graph(50);
                this.graphObject = new50;
                this.size = 50;
            }
        }
    }
    resetSizeControl() {
        const sizeControlParent = document.getElementById("size-control");
        const sizeControlChildren = sizeControlParent.children;

        for (let i = 1; i < sizeControlChildren.length; i++) {
            sizeControlChildren[i].classList.remove("size-selected");
        }
    }
    selectSizeControl(e) {
        this.resetSizeControl();
        e.currentTarget.classList.add("size-selected");
    }

    handleNewArray() {
        if (this.sorting === false) {
            this.graphObject = new Graph(this.size);
        } else {
            this.graphObject.stop = true;
            this.graphObject = new Graph(this.size);
        }
    }

    selectDescription(e) {
        this.clearDescription();
        const descriptionContainer = document.querySelector("#description-container");
        if (e.currentTarget.id === "bubble") {
            descriptionContainer.append(describeBubbleSort());
        } else if (e.currentTarget.id === "quick") {
            descriptionContainer.append(describeQuickSort());
        } else if (e.currentTarget.id === "merge") {
            descriptionContainer.append(describeMergeSort());
        }

    }

    clearDescription() {
        const descriptionContainer = document.querySelector("#description-container");
        while (descriptionContainer.firstChild) {
            descriptionContainer.removeChild(descriptionContainer.firstChild)
        }
    }

}





