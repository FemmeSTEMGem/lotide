const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😿😿😿 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`😻😻😻 Assertion Passed: ${actual} === ${expected}`);
  }
};

function tail(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

