var button = document.getElementById('counter');
button.onclick=function()
{
//Creating a new request object
var request = new XMLHttpRequest();
//Capture the response and store it in a variable
request.onreadystatechange = function()
{
if(request.readyState == XMLHttpRequest.DONE)
{
//Action
if(request.status == 200)
{
var counter = request.responseText;
var span = document.getElementById('count');
span.innerHTML = counter.toString();
}
}//Not done yet
};

//Make a request
request.open('GET','http://shivanimangal.imad.hasura-app.io/counter',true);
request.send(null);
};
