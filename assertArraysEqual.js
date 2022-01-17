const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2, assertArg) {
  if (eqArrays(array1, array2) === assertArg) {
    console.log(`😻😻😻 Assertion Passed: ${array1} and ${array2} === ${assertArg}`);
  } else {
    console.log(`😿😿😿 Assertion Failed: ${array1} and ${array2} !== ${assertArg}`);
  }
};


module.exports = assertArraysEqual;