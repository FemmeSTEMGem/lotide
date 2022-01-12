const assertArraysEqual = function(array1, array2, assertArg) {
  if (eqArrays(array1, array2) === assertArg) {
    console.log(`😻😻😻 Assertion Passed: ${array1} and ${array2} === ${assertArg}`);
  } else {
    console.log(`😿😿😿 Assertion Failed: ${array1} and ${array2} !== ${assertArg}`);
  }
};

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

const middle = function(array) {
  if (array.length === 1 || array.length === 2) {
    return []
  } else if (array.length % 2 === 0) {
    let numItemsToRemove = (array.length - 2) / 2
    array.splice(0, numItemsToRemove)
    array.splice(-numItemsToRemove, numItemsToRemove)
    return array
  } else {
    let numItemsToRemove = (array.length - 1) / 2
    array.splice(0, numItemsToRemove)
    array.splice(-numItemsToRemove, numItemsToRemove)
    return array
  }
}

console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]))


// 1, 2, 3, 4, 5, 6, 7, 8 (4 & 5 are the middle two numbers)
//array.length will = 8
//position of middle two numbers is 4 & 5

// 1, 2, 3, 4, 5, 6, 7, 8, 9 (5 is the middle number)
//array.length will = 9
//position of middle number is 5
