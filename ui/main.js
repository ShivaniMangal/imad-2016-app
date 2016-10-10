console.log('Loaded!');
console.log('Hi there!')
var trial = document.getElementById('content');
trial.innerHTML="PotterHead Aboard? You're in the right place! Mount your broomstick for a magical journey.";
var image = document.getElementById('dino');
image.onclick=function()
{
    image.style.marginLeft='100px';
}
var i = document.getElementById('dino');
var marginleft = 0;
function moveright()
{
    marginleft = marginleft + 10;
    i.style.marginleft = marginleft + 'px';
}
i.onclick = function()
{
    var interval =  setInterval(moveright, 50);
};