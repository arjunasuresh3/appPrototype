#!/usr/bin/env nodejs
var express = require('express');
var app = express();
var bakery = {
    1: {pieId: 1, type:'pecan pie', slices: 4},
    2: {pieId: 2, type:'apple pie', slices: 3},
    3: {pieId: 3, type:'cheasecake', slices: 5}
}, lastId = 3;
app.use(express.bodyParser());
// app.use('/apps', express.static('.'));
app.get('/', function (req, res) {
    console.log('seding index.html');
    res.sendfile('index.html');
});

app.get('/pies/find/:type', function(req, res){
     var type = req.params.type;
     console.log('Asked for ' , type);
     for (var i in bakery) {
         if (bakery[i].type === type) {
             res.send(bakery[i]);
             return;
         }
     }
     res.status(404, 'No such flavour');
});

app.get('/pies/:pieId', function (req, res) {
   res.send(bakery[req.params.pieId]);
});

app.get('/pies', function (req, res) {
    console.log('Listing all stock in the bakery');
    var a = [];
    for (var i in bakery) {
        a.push(bakery[i]);
    }
    res.send(a);
});

app.post('/pies', function (req, res) {
     var body = req.body;
     console.log('Adding ' , body.type);
     console.log(body);
     lastId += 1;
     body.pieId = lastId;
     bakery[lastId] = body;
     res.status(201);
     res.send({pieId:  lastId});
});


app['delete']('/pies/:pieId', function (req, res) {
    var pieId = req.params.pieId;
    console.log('deleting', pieId);
    delete bakery[pieId];
    res.send(200);

});

app.put('/pies/:pieId', function (req, res) {
     var pieId = req.params.pieId;
     console.log('Modifying ' , pieId);
     console.log(req.body);
     bakery[pieId] = req.body;
     res.send(200);
});

app.get('/pieView', function (req, res) {
    console.log('requested /pieView, sending index.html');
    res.sendfile('index.html');
})
app.get('/pieTable', function (req, res) {
    console.log('requested /pieTable, sending index.html');
    res.sendfile('index.html');
})
app.get('/all', function (req, res) {
    console.log('requested /pieTable, sending index.html');
    res.sendfile('index.html');
})

app.get('*', function (req, res) {
    console.log('*', req.path);
    res.sendfile('.' + req.path);
});


app.listen(3000);
console.log('Listening on port 3000');