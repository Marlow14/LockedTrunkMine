var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

var numbers = require('../app/numbers.js');

describe('#BDD()', function () {

    it('should work with should', function () {

        let foo = 'bar'
            , beverages = { tea: ['chai', 'matcha', 'oolong'] };

        foo.should.be.a('string');//pass a string for correct datatype
        foo.should.equal('bar');//pass a string value
        foo.should.have.lengthOf(3);//pass a number value
        beverages.should.have.property('tea').with.lengthOf(3);//pass  value and length
    });

});

describe('numbers Test', function () {
    it('testing even numbers', function () {
        let testNumbers = numbers.getEvens();

        chai.assert.include(testNumbers, 2)
        chai.assert.notInclude(testNumbers, 1);
        testNumbers.should.have.lengthOf(50)
    })

    it('testing odd numbers', function () {
        let testNumbers = numbers.getOdds();

        chai.assert.include(testNumbers, 49);
        chai.assert.notInclude(testNumbers, 20);
        testNumbers.should.have.lengthOf(50)
        expect(testNumbers).to.be.a('Array').lengthOf(50).include(1).include(49).include(99);

    })
})