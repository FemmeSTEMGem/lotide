const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2, assertArg) {
  if (eqArrays(array1, array2) === assertArg) {
    console.log(`π»π»π» Assertion Passed: ${array1} and ${array2} === ${assertArg}`);
  } else {
    console.log(`πΏπΏπΏ Assertion Failed: ${array1} and ${array2} !== ${assertArg}`);
  }
};


module.exports = assertArraysEqual;