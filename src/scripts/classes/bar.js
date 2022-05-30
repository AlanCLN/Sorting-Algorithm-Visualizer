class Bar {
    constructor(value, graph) {
        this.value = value;
        this.graph = graph;

        // create div for each bar and set some attributes
        const barDiv = document.createElement("div");
        const width = (1/graph.numDivs) * 100;

        barDiv.style.height = `${value * 3}px`;
        barDiv.style.width = `${width}%`;

        barDiv.classList.add("bar");

        this.div = barDiv;
    }
}

export default Bar;