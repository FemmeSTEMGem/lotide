const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (const key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key])
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected, assertArg) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === assertArg) {
    console.log(`😻😻😻 Assertion Passed: ${inspect(actual)} and ${inspect(expected)} === ${assertArg}`);
  } else {
    console.log(`😿😿😿 Assertion Failed: ${inspect(actual)} and ${inspect(expected)} !== ${assertArg}`);
  }
}

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }, true)