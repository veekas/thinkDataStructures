const selectionSort = require('./index.js');

describe('selectionSort', () => {

  it('sorts an array of unique values', () => {
    const uniqueArray = [4, 7, 2, 8, 0, 1];
    expect(selectionSort(uniqueArray)).toEqual([0, 1, 2, 4, 7, 8]);
  });

  it('sorts an empty array', () => {
    const emptyArray = [];
    expect(selectionSort(emptyArray)).toEqual([]);
  });

  it('sorts an array with repeat values', () => {
    const repeatsArray = [4, 0, 0, 8, 0, 1];
    expect(selectionSort(repeatsArray)).toEqual([0, 0, 0, 1, 4, 8]);
  });

  it('handles non-array input', () => {
    const incorrectInput = {};
    expect(() => selectionSort(incorrectInput)).toThrow();
  });
});
