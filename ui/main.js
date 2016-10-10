console.log('Loaded!');
console.log('Hi there!')
var trial = document.getElementById('content');
trial.innerHTML="PotterHead Aboard? You're in the right place! Mount your broomstick for a magical journey!";
var image = document.getElementById('dino');
image.onclick=function()
{
    image.style.marginLeft='100px';
};
var marginleft=0;
function moveright()
{
    marginleft = marginleft+10;
    image.style.marginleft = marginleft+'px';
}
image.onclick =function()
{
    var moving_time =  setInterval(moveright,100);
}