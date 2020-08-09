//player1
var randomNum1 = Math.floor(Math.random()* 6 + 1);
diceImage1 = 'dice'+randomNum1+'.png';
imageSource1= 'images/'+diceImage1;
image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src',imageSource1);
//player2
var randomNum2 = Math.floor(Math.random()*6 +1);
var diceImage2 = 'dice'+randomNum2+'.png';
imageSource2 ='images/'+diceImage2
image2 =document.querySelectorAll('img')[1];
image2.setAttribute('src',imageSource2);

if (randomNum1>randomNum2){
  document.querySelector('h1').innerHTML="Player 1 Wins";
}else if (randomNum1<randomNum2){
  document.querySelector('h1').innerHTML= "Player 2 Wins";
}
else{
  document.querySelector('h1').innerHTML="DRAW";
}




