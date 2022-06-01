import bubbleSort from "../algos/bubblesort";
import quickSort from "../algos/quicksort";

export default class Control {
    constructor(graphObject, size, speed, alg) {
        this.graphObject = graphObject;
        this.size = size;
        this.speed = speed;
        this.alg = alg;
    }

    async handlePlayBtn(e) {
        // debugger
        if (e.target.classList.contains("stop")) {
            e.target.classList.remove("stop");
            this.graphObject.stop = true;
        } else if (this.graphObject.sorted === false) {
            e.target.classList.add("stop");
            // await bubbleSort(this.graphObject, 50)
            await quickSort(this.graphObject, 0, this.graphObject.numDivs - 1, 33);
            e.target.classList.remove("stop");
        }
    }

    handleAlgControl(e) {
        if (e.currentTarget.id === "bubble") {

        }
    }

    resetAlgControl() {

    }
}





