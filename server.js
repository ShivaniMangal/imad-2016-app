var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'home.html'));
});

app.get('/MM', function(req,res){
	res.sendFile(path.join(__dirname, 'ui','Map.html'));
});
app.get('/Sorting-Hat', function(req,res)
{
	res.sendFile(path.join(__dirname,'ui','sorting.html'));
});

app.get('/prof', function(req,res)
{
	res.sendFile(path.join(__dirname,'ui','profile.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/style2.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style2.css'));
});

var counter=0;
app.get('/counter', function (req,res)
{
    counter=counter+1;
    res.send(counter.toString());
});
var correct=0;
app.get('/correct', function (req,res)
{
    correct=correct+1;
    res.send(correct.toString());
});
var names = [];
app.get('/submit-name', function (req,res)
{
    //Get name from the request
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
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

app.get('/bootstrap_imgs/lib2.jpg', function(req,res){
    res.sendFile(path.join(__dirname,'bootstrap_imgs','lib2.jpg'));
});
app.get('/bootstrap_imgs/quiz.jpg', function(req,res){
    res.sendFile(path.join(__dirname,'bootstrap_imgs','quiz.jpg'));
});
app.get('/bootstrap_imgs/lib3.jpg', function(req,res){
    res.sendFile(path.join(__dirname,'bootstrap_imgs','lib3.jpg'));
});
app.get('/bootstrap_imgs/g.jpg', function(req,res){
    res.sendFile(path.join(__dirname,'bootstrap_imgs','g.jpg'));
});
app.get('/bootstrap_imgs/ff.jpg', function(req,res){
    res.sendFile(path.join(__dirname,'bootstrap_imgs','ff.jpg'));
});
app.get('/bootstrap_imgs/lib.jpg', function(req,res){
    res.sendFile(path.join(__dirname,'bootstrap_imgs','lib.jpg'));
});
app.get('/bootstrap_imgs/gaiman.jpg', function(req,res){
    res.sendFile(path.join(__dirname,'bootstrap_imgs','gaiman.jpg'));
});
app.get('/bootstrap_imgs/YA-BOOK.jpg', function(req,res){
    res.sendFile(path.join(__dirname,'bootstrap_imgs','YA-BOOK.jpg'));
});
app.get('/bootstrap_imgs/tech.jpg', function(req,res){
    res.sendFile(path.join(__dirname,'bootstrap_imgs','tech.jpg'));
});
app.get('/bootstrap_imgs/poem.jpg', function(req,res){
    res.sendFile(path.join(__dirname,'bootstrap_imgs','poem.jpg'));
});
app.get('/bootstrap_imgs/holmes.jpg', function(req,res){
    res.sendFile(path.join(__dirname,'bootstrap_imgs','holmes.jpg'));
});
app.get('/bootstrap_imgs/ya.jpg', function(req,res){
    res.sendFile(path.join(__dirname,'bootstrap_imgs','ya.jpg'));
});
app.get('/bootstrap_imgs/got.jpg', function(req,res){
    res.sendFile(path.join(__dirname,'bootstrap_imgs','got.jpg'));
});
//app.get('/bootstrap imgs/Thumbs.db', function(req,res){
//    res.sendFile(path.join(__dirname, 'bootstrap imgs','Thumbs.db'));
//});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/likes_counter.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'likes_counter.js'));
});

//app.get('/ui/jquery-1.11.3.min.js', function (req, res) {
//  res.sendFile(path.join(__dirname, 'ui', 'jquery-1.11.3.min.js'));
//});

app.get('/ui/bootstrap.min.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.min.js'));
});
app.get('/ui/check.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'check.js'));
});
app.get('/register', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'register.html'));
});


app.get('/ui/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.css'));
});

app.get('/ui/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.min.css'));
});

app.get('/ui/bootstrap-theme.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap-theme.css'));
});

app.get('/ui/bootstrap-theme.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap-theme.min.css'));
});


app.get('/ui/bootstrap-theme.css.map', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap-theme.css.map'));
});

app.get('/ui/bootstrap-theme.min.css.map', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/bootstrap.css.map', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.css.map'));
});

app.get('/ui/bootrap.min.css.map', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.css.map'));
});

app.get('/comms', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'comm.html'));
});


app.get('/navig', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'navigator.html'));
 
});
app.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
 
});

app.get('/ui/comments.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'comments.js'));
});

app.get('/ui/stylemine.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'stylemine.css'));
});
app.get('/ui/reviews.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'reviews.css'));
});

app.get('/ui/correct.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'correct.js'));
});
app.get('/q1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Alocalq1.html'));
});
app.get('/p1', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'quizzing.html'));
});
app.get('/p2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'p2.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}! LOCALLY!!!!!!`);
});
