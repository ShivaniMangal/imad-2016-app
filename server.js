var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/MM', function(req,res){
	res.sendFile(path.join(__dirname, 'ui','Map.html'));
});
app.get('/Sorting-Hat', function(req,res)
{
	res.sendFile(path.join(__dirname,'ui','sorting.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/hermione.jpg', function(req,res){
    res.sendFile(path.join(__dirname,'ui','hermione.jpg'));
});

app.get('/ui/hp.png', function(req,res){
    res.sendFile(path.join(__dirname,'ui','hp.png'));
});

app.get('/ui/pic.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui',  'pic.png'));
});

app.get('/ui/cast.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui',  'cast.jpg'));
});

app.get('/ui/200_s.jpg', function(req, res){
    res.sendFile(path.join(__dirname,'ui','200_s.jpg'));
});
app.get('/ui/mm.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui',  'mm.jpg'));
});
app.get('/ui/sortinghat.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'sortinghat.jpg'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
