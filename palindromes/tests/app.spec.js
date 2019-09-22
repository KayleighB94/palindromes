const expect = require('chai').expect
const server = require('../app');

describe('test endpoints', () => {
  it('should return a string', () => {
    expect('Hello Welcome to palindromes').to.equal('Hello Welcome to palindromes');
  });


});