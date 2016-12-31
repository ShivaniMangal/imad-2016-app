
var submit = document.getElementById('submit_btn');
submit.onclick=function()
{
//Creating a request obj
var REQ = new XMLHttpRequest();

//Capture and store the response in a variable
REQ.onreadystatechange = function()
{
if(REQ.readystate == XMLHttpRequest.DONE)
{//Action
if(REQ.status == 200 || REQ.readystate==4)
{
//Capture a list of comments and render it as a list
var names=REQ.responseText;
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
