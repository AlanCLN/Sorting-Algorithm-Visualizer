
async function bubbleSort (graph) {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < graph.arr.length - 1; i++) {  // the graph has a this.arr property
            let j = i + 1;
            debugger

            let ele1 = graph.arr[i].div; // grabbing the div elements of the bar object
            let ele2 = graph.arr[j].div; // grabbing another div element of the bar object

            ele1.classList.add("checking");
            ele2.classList.add("checking");

            if (graph.arr[i].value > graph.arr[j].value) {
                sorted = false;
                debugger
                [graph.arr[i], graph.arr[j]] = [graph.arr[j], graph.arr[i]];
                debugger
                setTimeout(update(ele1, ele2), 5000)
                debugger
            }
            ele1.classList.remove("checking");
            ele2.classList.remove("checking");
        }
    }
    return graph;
}


function update(bar1, bar2) {  // takes in two bar divs and updates the information
    let tempHeight = bar1.style.height;
    let tempInnerText = bar1.innerText;

    bar1.style.height = bar2.style.height;
    bar1.innerText = bar2.innerText;

    bar2.style.height = tempHeight;
    bar2.innerText = tempInnerText;

    bar2.div = bar1.div;

}

export default bubbleSort;