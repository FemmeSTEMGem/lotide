const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😿😿😿 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`😻😻😻 Assertion Passed: ${actual} === ${expected}`);
  }
};

function countLetters(sentence) {
  let sentenceObject = {};
  for (const character of sentence) {
    if (sentenceObject[character]) {
      sentenceObject[character] += 1;
    } else {
      sentenceObject[character] = 1;
    }
    delete sentenceObject[" "];
  }
  return sentenceObject;
}

console.log(countLetters("Lighthouse in the house"));