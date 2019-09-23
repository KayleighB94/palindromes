
const http = require('http');
const express = require('express');
const Joi = require('joi');
const port = 3000;
const app = express();
const server =  http.Server(app)

app.use(express.json());

app.get('/palindrome', (err, res) => {
    res.status(200);
    console.log(`Requesting the last ten palindromes`)

    console.log(`Sending the last ten palindromes to users`)
    res.send('Hello Welcome to palindromes')

});


app.post('/palindromes', (req, res) => {
    console.log(`Setting Schema to be a string`)
    const schema = {
        palindrome: Joi.string().required()
    };

    console.log(`Checking the body matches the schema`)
    const res_palindrome = Joi.validate(req.body, schema);
    if (res_palindrome.error){
        console.log(`Error, the body doesn't match the schema: ${res_palindrome.error}`)
        res.status(400).send(res_palindrome.error.details[0].message);
        return;
    }
    // Defining the palindrome from the body request
    const palindrome = req.body.palindrome;


    console.log(`Checking if ' ${palindrome} ' is a palindromes`)
    const result = checkForPalindrome(palindrome)

    console.log(`If true, adding it to the database`)
    // .. Adding to databse

    console.log(`Reporting back results to user`)
    res.send(`'${palindrome}' : ${result}`)

});


function checkForPalindrome(palindrome){
    // Remove spaces and special characters
    var regex = /[\W_]/g;
    var strJust = palindrome.replace(regex, '');
    console.log(`regex removed : ${strJust}`)
    // Switch everything to lower case
    var strLowerCase = strJust.toLowerCase()
    console.log(`Lowercase : ${strLowerCase}`)
    // Reverse the string
    var strReverse = strLowerCase.split('').reverse().join('');
    console.log(`Reverse the string : ${strReverse}`)
    // Compare the reverse with the original, if they match then it's a palindrome
    return strLowerCase===strReverse;
}

server.listen(port, () => console.log(`Listening on port: ${port}.....`));