# [Sorting Algorithm Visualizer](https://alancln.github.io/Sorting-Algorithm-Visualizer/)

[DEMO](https://alancln.github.io/Sorting-Algorithm-Visualizer/)

## Background

Sorting Algorithm Visualizer is an application that allows users to observe the intermediate steps of popular sorting algorithms (i.e. bubbleSort, quickSort, mergeSort). Some features include adjusting the speed at which the graph is sorted and selecting the amount of datapoints you would like to sort.

![](./assets/gif-demo/quick-sort-demo.gif)

## Functionality and MVP

In Sorting Algorithm Visualizer users will be able to:

- Understand the different sorting algorithms when reading each description
- Adjust the speed at which the graph is being sorted
- Select the amount of datapoints you would like to sort
- A start/stop button for when you want to make changes

![](./assets/gif-demo/buttons-demo.gif)

Hover over the info icon for guidelines on how to start using it

![](./assets/gif-demo/info-icon.gif)

## Technologies

- HTML
- SCSS
- Javascript
- Webpack

## Code Snippets

Below is a code snippet of how the graph is made with all the bars. The reset() function removes all child nodes on the graph so we can generate a new set of bars. The value of each bar is random and passed in as an argument for each Bar instance. The property 'this.bars' was initialized as an empty array. We then push each bar's div into 'this.bars' so we can manipulate this array later with our sorting algorithms.

```javascript
generateGraph() {
    this.reset();
    for (let i = 0; i < this.numDivs; i++) {
        const value = (Math.floor(Math.random() * 100)) + 10;

        const barObject = new Bar(value, this.graph);
        if (this.numDivs <= 25) {
            barObject.div.innerText = value;
        }
        this.bars.push(barObject.div);
        this.graph.appendChild(barObject.div);
    }
}
```

Below is a swap function that belongs to the graph class. In this function, we are passing in NOT bar objects, but the divs that the bar object represents. Doing so allows us to use HTML DOM methods (replaceWith and insertBefore) that swap the two nodes for us. 

```javascript
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
```
