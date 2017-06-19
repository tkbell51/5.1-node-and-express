const express = require('express');
const app = express();


const loremIpsum = require('lorem-ipsum');
const output = loremIpsum({
  'count': 3,
  'units': 'paragraphs',
  'format':'html'
});




app.get('/lorem', function(req, res){
  res.send(output);
});


app.get('/lorem/:count', function(req, res){
  res.send(output.count);
});






app.listen(3000, function(){
  console.log('This is working correctly!');
});
