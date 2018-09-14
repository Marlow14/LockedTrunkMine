const assert = require('chai').assert;
const numbers = require('../app/numbers');

describe('numbers', function(){
    describe('getEvens()', function(){
        it('should contain 22', function(){
            assert.include(numbers.getEvens(), 22);
        });
        it('should not include 35', function(){
            assert.notInclude(numbers.getEvens(), 35);
        });
    });
    describe('getOdds()', function(){
        it('should contain 45', function(){
            assert.include(numbers.getOdds(), 45);
        });
        it('should not contain 88', function(){
            assert.notInclude(numbers.getOdds(), 88);
        });
    });
});