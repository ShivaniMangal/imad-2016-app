console.log('Loaded!');
console.log('Hi there!')
var trial = document.getElementById('content');
trial.innerHTML="Do I sense a PotterHead? You're in the right place! Mount your broomstick for a magical journey!";
var image = document.getElementById('dino');
image.onclick=function()
{
    image.style.marginLeft='100px';
};
function moveleft()
{
    marginright = marginright+10;
    image.style.marginright = marginright+'px';
}
image.onclick =function()
{
    var moving_time =  setinterval(moveleft,100);
}