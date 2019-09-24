const server = require('../palindromes/index');
const expect = require('chai').expect;

const serverurl='http://localhost:3000';
let chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('palindromes', () => {

  describe('/GET palindromes', () => {
    it('Should return 10 palindromes', () => {
      chai.request(serverurl).get('/palindromes').end(function (err, res) {
        expect(res.status).to.equal(200);
      });
    });
  });

  describe('/POST palindromes', () => {
    it('it should not POST if palindromes is a number', () => {
      chai.request(serverurl).post('/palindromes').send({"palindrome":6}).catch((err) => {
        console.log(`res: `, res);
        expect(res.status).to.equal(400);
      })
    });

    it('it should return true if string is a palindrome', () => {
      chai.request(serverurl).post('/palindromes').send({"palindrome":"Dammit I'm Mad"}).end( (err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.equal("true");
      })
    });

    it('it should return false if string is not a palindrome', () => {
      chai.request(serverurl).post('/palindromes').send({"palindrome":"This is not a palindrome"}).end( (err, res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.equal("false");
      })
    });

  });
});