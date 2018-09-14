const numbers = require('./../app/numbers.js');
const assert = require('chai').assert;

describe('#should', () => {
    it('even/odd array should have 50 elements', function () {
        it('even array should have 50 elements', function() {
            assert.equal(numbers.getEvens(), 50);
          });

          it('odd array should have 50 elements', function() {
            assert.equal(numbers.getodds(), 50);
          });          
    });
});