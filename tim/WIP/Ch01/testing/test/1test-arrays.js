const assert = require('chai').assert;

describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal([1,2,3].indexOf(4), -1);
        });
        it('should return 0 for the first element', function(){
            assert.equal([1,2,3].indexOf(1), 0);
        });
        it('should return 3 when starting from an index of 2', function(){
            assert.equal([1,9,2,9].indexOf(9, 2),3);
        });
    });
    describe('#filter()', function(){
        it('should filter evens', function(){
            const allNums = [1,2,3,4,5,6];
            const evens = allNums.filter(function(element) {
                return (element % 2 == 0);
            });

            assert.include(evens, 2);
            assert.notInclude(evens, 3);
        });
    });
});