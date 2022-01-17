// const assertEqual = require('../assertEqual');


// assertEqual(2, 2);


const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns true", () => {
    assert.strictEqual(assertEqual(2, 2));
  });

  it("returns false", () => {
    assert.strictEqual(assertEqual(2)); 
  });
});