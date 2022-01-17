const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;
