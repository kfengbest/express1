var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello express');
});

app.listen(3000);
console.log("try http://localhost:3000");

