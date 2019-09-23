const server = require('../palindromes/index');
const expect = require('chai').expect;

const serverurl='http://localhost:3000';
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('palindromes', () => {

  describe('/GET palindromes', () => {
    it('Should return 10 palindromes', () => {
      chai.request(serverurl).get('/palindrome').end((err, res) => {
        expect(res.status).to.equal(200);
      });
    });
  });

  describe('/POST palindromes', () => {
    it('it should not POST if palindromes is a number', () => {
      chai.request(serverurl).post('/palindrome').send(6).catch((err) => {
        expect(res.status).to.equal(400);
        done();
      });
    });

    it('it should return true if string is a palindrome', () => {
      chai.request(serverurl).post('/palindrome').send("Damint I'm Mad").end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.should.be.eql(`'Damint I'm Mad' : true`);
        done();
      });
    });

    it('it should return false if string is not a palindrome', () => {
      chai.request(serverurl).post('/palindrome').send("This is not a palindrome").end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.should.be.eql(`'This is not a palindrome' : false`);
        done();
      });
    });

  });


});