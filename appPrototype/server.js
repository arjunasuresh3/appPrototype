#!/usr/bin/env nodejs
var express = require('express'),
app = express(),
bakery = {
    1: {pieId: 1, type:'pecan pie', slices: 4},
    2: {pieId: 2, type:'apple pie', slices: 3},
    3: {pieId: 3, type:'cheasecake', slices: 5}
}, lastId = 3;

app.use(express.bodyParser());

app.get('/', function (req, res) {
    console.log('sending index.html');
    res.sendfile('index.html');
});

app.get('*', function (req, res) {
    console.log('*', req.path);
    res.sendfile('.' + req.path);
});

app.listen(3000);
console.log('Listening on port 3000');