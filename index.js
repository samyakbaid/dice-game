var randomNumber1=Math.floor((Math.random()*6)+1);
var randomNumber2=Math.floor((Math.random()*6)+1);
document.querySelector('.img1').setAttribute('src','./images/dice'+randomNumber1+'.png');
document.querySelector('.img2').setAttribute('src','./images/dice'+randomNumber2+'.png');
if(randomNumber1===randomNumber2){
    document.querySelector('h1').textContent='Draw!'
}
if(randomNumber1>randomNumber2){
    document.querySelector('h1').textContent='player 1 wins !'
}
if(randomNumber1<randomNumber2){
    document.querySelector('h1').textContent='player 2 wins !'
}

document.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {

      window.location.reload();
    }
  });
