
var submit = document.getElementById('submit_btn');
submit.onclick=function()
{
//Creating a request obj
var request = new XMLHttpRequest();

//Capture and store the response in a variable
request.onreadystatechange = function()
{
if(request.readystate == XMLHttpRequest.DONE)
{//Action
if(request.status == 200)
{
//Capture a list of comments and render it as a list
var names=request.responseText;
names=JSON.parse(names);//convets string to JSON obj i.e array
var list = '';
for(var i=0; i< names.length; i++){
list += '<li>' + names[i] + '</li>';
}
var ul = document.getElementById('work');
ul.innerHTML = list; 
}
}
//Not done
};
//Make the request
var nameInput=document.getElementById('name');
var name= nameInput.value;
request.open('GET','http://shivanimangal.imad.hasura-app.io/submit-name?name=' + name, true);
request.send(null);
};
