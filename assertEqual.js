const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`πΏπΏπΏ Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`π»π»π» Assertion Passed: ${actual} === ${expected}`);
  }
};


module.exports = assertEqual;