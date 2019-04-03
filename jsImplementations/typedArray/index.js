class MyArrayList {
  constructor(length) {
    this.size = 0;
    this.typedArray = new Int8Array(length);
  };

  addAtIndex(index, element) {
    if (index < 0 || index > this.typedArray.length) {
      console.error('index out of bounds, no action taken');
    }

    else if (!this.checkIfValid(element)) {
      console.error('invalid input element, no action taken');
    }

    else {
      this.typedArray[index] = element;
      this.size += 1;
    }

    return element;
  }

  checkIfValid(element) {
    const isInt = n => (typeof n === 'number') && (n  % 1 === 0);

    const typedArrayAcceptedValuesMap = {
      Int8Array: { min: -128, max: 127 },
    };

    const isValidInt8 = n => (
      n > typedArrayAcceptedValuesMap.Int8Array.min
      && n < typedArrayAcceptedValuesMap.Int8Array.max
    );

    if (
      this.typedArray.constructor === Int8Array
      && isInt(element)
      && isValidInt8(element)
    ) {
      return true;
    }

    return false;
  }

  add(element) {
    let currentLength = this.typedArray.length;

    if (!this.checkIfValid(element)) {
      console.error('invalid input element, no action taken');
    }

    else if (this.size >= currentLength) {
      let newTypedArray = new Int8Array(currentLength * 2);

      for (let j = 0; j < currentLength; j++) {
        newTypedArray[j] = this.typedArray[j];
      }

      this.typedArray = newTypedArray;
    }

    else {
      for (let i = 0; i < currentLength; i++) {
        if (this.typedArray[i] === 0) {
          this.typedArray[i] = element;
          break;
        }
      }
      this.size += 1;
    }
  }
}

module.exports = MyArrayList;
