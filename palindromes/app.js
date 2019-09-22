
const http = require('http');
const express = require('express');
const port = 3000;
const app = express();
const server =  http.Server(app)

app.get('/', (err, res) => {
    res.status(200);
    console.log(`Requesting the last ten palindromes`)
    res.send('Hello Welcome to palindromes')

});


app.post('/', (err, res) => {
    res.status(200);
    console.log(`Checking if string is a palindromes`)

});

server.listen(port, () => console.log(`Listening on port: ${port}.....`));