/**
 * steps to selection sort:
 * 1. pointer at x position
 * 2. find min value in the rest of the array
 * 3. switch with x position (in-place)
 * 4. increment x
 * 5. repeat until end of the array
 */

function selectionSort(array) {
  if (!Array.isArray(array)) throw new Error('selectionSort only accepts arrays');

  function findLowestValueIndex(startIndex) {
    let lowestValueIndex = startIndex;
    for (let i = startIndex; i < array.length; i++) {
      if (array[i] < array[lowestValueIndex]) {
        lowestValueIndex = i;
      }
    }
    return lowestValueIndex;
  }

  function swapNumbersInPlace(i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  for (let i = 0; i < array.length; i++) {
    let lowestValueIndex = findLowestValueIndex(i);
    if (array[lowestValueIndex] < array[i]) {
      swapNumbersInPlace(lowestValueIndex, i);
    }
  }

  return array;
}

module.exports = selectionSort;
