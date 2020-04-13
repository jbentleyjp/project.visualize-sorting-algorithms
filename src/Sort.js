class selectionSort {
  constructor(array) {
    this.array = array;
  }
  sort() {
    let arrayToSort = this.array;
    for (let i = 0; i < arrayToSort.length; i++) {
      for (let j = i + 1; j < arrayToSort.length; j++) {
        if (arrayToSort[j] < arrayToSort[i]) {
          let currentHighValue = arrayToSort[i];
          console.log(currentHighValue);
          arrayToSort[i] = arrayToSort[j];
          arrayToSort[j] = currentHighValue;
        }
      }
    }
    return arrayToSort;
  }

  returnValue(value) {
    return value;
  }
}

module.exports = selectionSort;
