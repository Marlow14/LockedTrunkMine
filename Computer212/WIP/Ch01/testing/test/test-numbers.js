const assert = require('chai').assert;
let evens = require('../app/numbers');
var foo = [];   

for (var i = 1; i <= 100; i++) {
    foo.push(i);
}
let arr =foo.filter(n => n%1);

describe('#filter()', function() {
    it('should filter evens', function() {
        assert.equal(evens(foo), arr);
    });
  });