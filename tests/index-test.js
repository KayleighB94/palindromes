const server = require('./palindromes/index');

let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('palindromes', () => {

  describe('/GET palindromes', () => {
    it('Should return 10 palindromes', () => {
      chai.request(server).get('/palindrome').end((err, res) => {
        res.should.have.status(200);
        done();
      });
    });
  });

  describe('/POST palindromes', () => {
    it('it should not POST if palindromes is a number', () => {
      chai.request(server).post('/palindrome').send(6).end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('errors');
        done();
      });
    });

    it('it should return true if string is a palindrome', () => {
      chai.request(server).post('/palindrome').send("Damint I'm Mad").end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.eql(`'Damint I'm Mad' : true`);
        done();
      });
    });

    it('it should return false if string is not a palindrome', () => {
      chai.request(server).post('/palindrome').send("This is not a palindrome").end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.eql(`'This is not a palindrome' : false`);
        done();
      });
    });

  });


});