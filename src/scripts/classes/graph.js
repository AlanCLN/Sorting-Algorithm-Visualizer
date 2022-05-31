import Bar from "./bar"

export default class Graph {
    constructor(numDivs) {
        this.graph = document.getElementById("graph");
        this.numDivs = numDivs;
        this.generateGraph();
        this.sorted = false;
    }

    generateGraph() {
        this.reset();
        for (let i = 0; i < this.numDivs; i++) {
            const value = (Math.floor(Math.random() * 100)) + 10;

            const barObject = new Bar(value, this.graph);
            if (this.numDivs < 20) {
                barObject.div.innerText = value;
            }
            this.bars.push(barObject.div);
            this.graph.appendChild(barObject.div);
        }
    }

    removeAllChildNodes() {
        while (this.graph.firstChild) {
            this.graph.removeChild(this.graph.firstChild);
        }
    }

    reset() {
        this.sorted = false;
        this.removeAllChildNodes();
        this.bars = [];
    }

    check(bar1, bar2) {
        bar1.classList.add("checking");
        bar2.classList.add("checking");
    }

    uncheck(bar1, bar2) {
        bar1.classList.remove("checking");
        bar2.classList.remove("checking");
    }

}