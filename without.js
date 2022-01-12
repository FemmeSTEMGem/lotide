const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2, assertArg) {
  if (eqArrays(array1, array2) === assertArg) {
    console.log(`😻😻😻 Assertion Passed: ${array1} and ${array2} === ${assertArg}`);
  } else {
    console.log(`😿😿😿 Assertion Failed: ${array1} and ${array2} !== ${assertArg}`);
  }
};

const without = function(sourceArray, itemsToRemoveArray) {
  let clonedArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    clonedArray.push(sourceArray[i]);
  }
  for (let j = 0; j < itemsToRemoveArray.length; j++) {
    for (let k = 0; k < clonedArray.length; k++) {
      if (itemsToRemoveArray[j] === clonedArray[k]) {
        clonedArray.splice(clonedArray[k - 1], 1);
      }
    }
  }
  return clonedArray;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));