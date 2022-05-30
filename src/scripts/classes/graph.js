import Bar from "./bar"

export default class Graph {
    constructor(numDivs) {
        this.graph = document.getElementById("graph");
        this.numDivs = numDivs;
        this.generateGraph();
    }

    generateGraph() {
        this.bars = [];
        this.removeAllChildNodes();
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
}