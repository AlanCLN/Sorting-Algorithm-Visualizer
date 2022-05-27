function bubbleSort(array) {
    const resultArray = array.slice();
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < resultArray.length - 1; i++) {
            let j = i + 1;
            if (resultArray[i] > resultArray[j]) {
                sorted = false;
                [resultArray[i], resultArray[j]] = [resultArray[j], resultArray[i]];
            }
        }
    }
    return resultArray;
}