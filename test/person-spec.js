const {expect} = require('chai');
const Person = require('../problems/person.js');

describe('Person class', () => {
    let person;
    beforeEach(() => {
        person = new Person('Mai', 25);
    })

describe('constructor', () => {
    it('should set the name and age properties', () => {
        expect(person.name).to.equal('Mai')
        expect(person.age).to.equal(25);
    })
})
describe('sayHellgo() method', () => {
    
} )
})