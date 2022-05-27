class Bar {
    constructor(value, graph) {
        debugger
        this.value = value;
        this.graph = graph;
        const barDiv = document.createElement("div");
        this.div = barDiv;
        barDiv.style.height = `${value * 3}px`;
        barDiv.innerText = value;
        barDiv.classList.add("bar");
    }
}

export default Bar;