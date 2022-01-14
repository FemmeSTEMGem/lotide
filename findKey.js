const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😿😿😿 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`😻😻😻 Assertion Passed: ${actual} === ${expected}`);
  }
};

function findKey(object, callback) {
  return callback(object)
  }

const filterRestaurantByRating = function(restaurants) {
  for (const restaurant in restaurants) {
    if (restaurants[restaurant].stars === 2) {
      return restaurant
    }
  }
  return undefined
}
    
console.log(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, filterRestaurantByRating)) // => "noma"