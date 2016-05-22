var express = require('express');
var app = express();

//підтягується mongojs
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']); // our db is contactlist

var bodyParser = require('body-parser');

// app.get('/', function (req, res) {
//   res.send('Hello world')
// }); // just check working

app.use(express.static(__dirname + "/public"));// вказується папка
app.use(bodyParser.json());

app.get('/contactlist', function(req, res) {
  console.log('I received a GET request');
  // var person1 = {
  //   name: 'Tim',
  //   email: 'tim@email.com',
  //   number: '(111) 111-111-111'
  // };
  //
  // var person2 = {
  //   name: 'Lola',
  //   email: 'lola@email.com',
  //   number: '(111) 111-111-112'
  // };
  //
  // var person3 = {
  //   name: 'Jonh',
  //   email: 'jonh@email.com',
  //   number: '(111) 111-111-333'
  // };
  //
  // var contactlist = [person1, person2, person3];
  // res.json(contactlist); // попередній крок дані передавалися так до підключення db

  db.contactlist.find(function(err,docs){
    console.log(docs);
    res.json(docs);
  });
});
//  запис в базу даних
app.post('/contactlist', function(req, res) {
  console.log(req.body);
  db.contactlist.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/contactlist/:id', function(req,res) {
  var id = req.params.id;
  console.log(id);
  db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
    res.json(doc);
  });
});

app.get('/contactlist/:id', function(req,res) {
  var id = req.params.id;
  console.log(id);
  db.contactlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
    res.json(doc);
  });
});

app.put('/contactlist/:id', function(req,res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
    new: true}, function(err, doc){
      res.json(doc);
    });
});

app.listen(3000);
console.log('Server running on port 3000');
