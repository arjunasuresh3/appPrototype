#!/usr/bin/env nodejs
var express = require('express'),
url  = require('url'),
app = express(),
lastId = 3;

app.use(express.bodyParser());

app.get('/', function (req, res) {
    console.log('sending index.html');
    res.sendfile('index.html');
});

app.get('/memresults', function (req, res) {
            var bakery = {
                1: {MemberId: 1, Name:'pecan pie', DOB: 4},
                2: {MemberId: 2, Name:'apple pie', DOB: 3},
                3: {MemberId: 3, Name:'cheasecake', DOB: 5}
            }, myArray = [];
            for (var i in bakery) {
                console.log(bakery[i]);
                myArray.push(bakery[i]);
            }
            // res.writeHead(200, { 'Content-Type': 'application/json' });
            // res.write(JSON.stringify(myArray));    
            // res.end();
            res.send(myArray);    
        });

app.get('*', function (req, res) {
    console.log('*', req.path);
    res.sendfile('.' + req.path);
});

app.listen(3000);
console.log('Listening on port 3000');