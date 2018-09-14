let numbers = require("./app/numbers");

let evens = numbers.getEvens();
let odds = numbers.getOdds();

describe('#filter()', function() {
    it('should filter evens', function() {

        assert.include(evens, 2);
        assert.notInclude(evens, 3);
    })
  });

describe('#filter()', function() {
    it('should filter odds', function() {

        assert.include(odds, 4);
        assert.notInclude(odds, 5);
    })
  });