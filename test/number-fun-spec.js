const { expect } = require('chai');
const { returnsThree, reciprocal } = require('../problems/number-fun.js')

describe('returnsThree', () => {
    it('should return the number 3', () => {
        const result = returnsThree();
        expect(result).to.equal(3);
    })
})

describe('reciprocal', () => {

    describe('Valid arguments', () => {
        it('should return the reciprocal of the given argument', () => {
            for (let i = 1; i <= 100000; i++) {
                expect(reciprocal(i)).to.equal(1 / i);
            }
        })
    })

    describe('Invadlid arguments', () => {
        it('should throw a RangeError if the number is less than 1', () => {
            expect(() => reciprocal(0)).to.throw(RangeError, 'Number must be between 1 and 1,000,000')
        })
        it('should throw a RangeError if the number is greater than 1,000,000', () => {
            expect(() => reciprocal(1000001)).to.throw(RangeError, "Number must be between 1 and 1,000,000.")
        })
    })
})