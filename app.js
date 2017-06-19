const express = require('express');
const app = express();


const loremIpsum = require('lorem-ipsum');
var output = loremIpsum({
  'count': 3,
  'units': 'paragraphs',
  'format':'html'
});




app.get('/lorem', function(req, res){
  res.send(output);
});


app.get('/lorem/:count', function(req, res){
  res.send(loremIpsum({
    'count': req.params.count,
    'units': 'paragraphs',
    'format':'html'
  }));
});






app.listen(3000, function(){
  console.log('This is working correctly!');
});
