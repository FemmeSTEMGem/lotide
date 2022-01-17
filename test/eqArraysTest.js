// const eqArrays = require('../eqArrays');

// assertEqual(eqArrays([1, 2, 3], [1, 2, 2]), false);


const assert = require('chai').assert;
const eqArrays = require('../eqArrays');


describe("#eqArrays", () => {
  it("returns false when the array lengths aren't the same", () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
  });

  it("returns false when the array lengths ARE the same, but don't match", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
  });

  it("returns true when the arrays match", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
  });
});

// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };