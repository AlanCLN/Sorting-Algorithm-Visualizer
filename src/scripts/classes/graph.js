import Bar from "./bar"

class Graph {
    constructor(length) {
        this.arr = [];
        this.length = length;
        this.generateGraph();
    }

    generateGraph() {
        debugger
        for (let i = 0; i < this.length; i++) {

            const value = (Math.floor(Math.random() * 100)) + 5;
            const graph = document.getElementById("graph");

            const bar = new Bar(value, graph);

            graph.appendChild(bar.div)
        }
    }
}

export default Graph;