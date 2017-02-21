const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	it('should return fizzbuzz for input divisible by 15', function() {
		const reply = fizzBuzzer(45);
		reply.should.equal('fizz-buzz');
	})
	it('should return buzz for input divisible by 5', function() {
		const reply = fizzBuzzer(20);
		reply.should.equal('buzz');
	})
	it('should return fizz for input divisible by 3', function() {
		const reply = fizzBuzzer(9);
		reply.should.equal('fizz');
	})
	it('should return the input for all other cases', function() {
		const reply = fizzBuzzer(7);
		reply.should.equal(7);
	})
})