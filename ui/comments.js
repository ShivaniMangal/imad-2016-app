chrome.exe -allow-file-access-from-files;
var submit = document.getElementById('submit_btn');
submit.onclick=function()
{
    alert('started');
//Creating a request obj
var REQ = new XMLHttpRequest();
alert('req generated');

//Capture and store the response in a variable
REQ.onreadystatechange = function()
{
   // alert('crossed onreadystatechange');
  // if(REQ.readystate!=XMLHttpRequest.DONE)
   //{
     //  alert('oh no');
 //  }
 //  else if(REQ.readystate === XMLHttpRequest.DONE)
 
 if(XMLHttpRequest.DONE)
{//Action
alert('action has begun');
if(REQ.status === 200 )
{
   alert('200!');
//Capture a list of comments and render it as a list
var names=REQ.responseText;
alert('response');
var obj=JSON.parse(names);//convets string to JSON obj i.e array
alert('parsed');
var list = '';
for(var i=0; i< obj.length; i++){
list += '<li>' + obj[i] + '</li>';
}
//document.getElementById('work').innerHTML=list;
var ul = document.getElementById('work');
ul.innerHTML = list;
}
}
//Not done
};
//Make the request
var nameInput=document.getElementById('name');
var name= nameInput.value;
REQ.open('GET','http://shivanimangal.imad.hasura-app.io/submit-name?name=' + name, true);
REQ.send(null);
alert('sent...but where?')
};

