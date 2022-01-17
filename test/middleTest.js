const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns two middle values if the string length is even", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });

    it("returns single middle value if the string length is odd", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); 
  });
});