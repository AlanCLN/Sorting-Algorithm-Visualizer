// import Bar from "./scripts/classes/bar"
import Graph from "./scripts/classes/graph";
import bubbleSort from "./scripts/algos/bubblesort";
import sleep from "./scripts/utils/sleep";


document.addEventListener('DOMContentLoaded', () => {

    const graphObject = new Graph(30);

    const playBtn = document.querySelector('.play');

    playBtn.addEventListener('click', (e)=>{

        if (e.target.classList.contains("pause")) {
            e.target.classList.remove("pause");
            // add pause alg here
        } else {
            // e.target.classList.add("pause");
            // async function removePauseAfterSorted () {
            //     await bubbleSort(graphObject, 50);
            //     e.target.classList.remove("pause");
            //     return;
            // }
            // removePauseAfterSorted();
            
        }
        
    })

})