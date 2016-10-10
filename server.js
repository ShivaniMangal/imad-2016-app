var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/Marauders-Map', function(req,res){
	res.sendFile(path.join(_dirname, 'ui','Map.html'));
});
app.get('/Sorting-Hat', function(req,res)
{
	res.send('Godric | Salazar | Rowena | Helga');
});
app.get('/Cursed-Child', function(req,res){
	res.send('Albus+Scorpius+Delphi = Disappointment');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
