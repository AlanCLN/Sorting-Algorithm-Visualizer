import sleep from "../utils/sleep";
import Bar from "./bar"

export default class Graph {
    constructor(numDivs, speed) {
        this.graph = document.getElementById("graph");
        this.numDivs = numDivs;
        this.generateGraph();
        this.sorted = false;
        
        // speed will be passed in as either 1, 2, or 3. 100 is the ms delay set at
        // each iteration of an algorithm. The less ms, the less delay, the faster the alg. 
        this.speed = (100/speed);  

        // handlePlayBtn will set this to true in order to stop an alg.
        this.stop = false;
    }

    generateGraph() {
        this.reset();
        for (let i = 0; i < this.numDivs; i++) {
            const value = (Math.floor(Math.random() * 100)) + 10;

            const barObject = new Bar(value, this.graph);
            this.barObjects.push(barObject);
            if (this.numDivs <= 25) {
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
        this.barObjects = [];
    }

    check(bar1, bar2) {
        bar1.classList.add("checking");
        bar2.classList.add("checking");
    }

    uncheck(bar1, bar2) {
        bar1.classList.remove("checking");
        bar2.classList.remove("checking");
    }

    resetSort() {
        this.bars.forEach(bar => {
            bar.classList.remove("checking");
            bar.classList.remove("sorted");
        })
        this.stop = false;
    }


    async swap(bar1, bar2, speed) {

        bar1.classList.add("swapping");
        bar2.classList.add("swapping");


        const afterBar2 = bar2.nextElementSibling;
        const parent = bar2.parentNode;
    
        bar1.replaceWith(bar2);
        parent.insertBefore(bar1, afterBar2);

        await sleep(speed * 2);

        bar1.classList.remove("swapping");
        bar2.classList.remove("swapping");
    }



}