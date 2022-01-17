const assertEqual = require('./assertEqual');

function head(array) {
  return array[0]
}


assertEqual(head([5,6,7]), 5);