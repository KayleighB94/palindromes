const expect = require('chai').expect
const server = require('../app');

let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('palindromes', () => {
  beforeEach((done) => {
    Book.remove({}, (err) => { 
       done();           
    });        
  });

  describe('/GET palindromes', () => {
    it('Should return 10 palindromes', () => {
      chai.request(server).get('/palindrome').end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(0);
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

    it('it should return true if palindromes is a correct', () => {
      chai.request(server).post('/palindrome').send("A man, a plan, a canal. Panama").end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.eql(`'A man, a plan, a canal. Panama' : true`);
        done();
      });
    });

  });


});