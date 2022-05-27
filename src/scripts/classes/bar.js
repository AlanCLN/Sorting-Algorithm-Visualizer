class Bar {
    constructor(value, graph) {
        this.value = value;
        this.graph = graph;
        console.log(value);
        const barDiv = document.createElement("div");

        barDiv.style.height = "80px";
    }
}

export default Bar;