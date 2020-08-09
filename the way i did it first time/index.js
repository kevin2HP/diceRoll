var randomNumber1 =Math.floor(Math.random()*6+1);
function randImg1(randomNumber1){
    console.log("p1:"+ randomNumber1);
    if (randomNumber1>randomNumber2){
        document.querySelector('h1').innerHTML='Player1 Wins';
    }
    if (randomNumber1<randomNumber2){
        document.querySelector('h1').innerHTML='Player2 Wins';
    }
    if (randomNumber1===randomNumber2){
        document.querySelector('h1').innerHTML="It's A Draw!";
    }
    if (randomNumber1 === 1){
        document.querySelector('img').setAttribute('src','images/dice1.png');                      
    }
    else if(randomNumber1 === 2){
            document.querySelector('img').setAttribute('src','images/dice2.png');
    }
    else if(randomNumber1 === 3){
        document.querySelector('img').setAttribute('src','images/dice3.png');
    }
    else if(randomNumber1 === 4){
        document.querySelector('img').setAttribute('src','images/dice4.png');
    }
    else if(randomNumber1 === 5){
        document.querySelector('img').setAttribute('src','images/dice5.png');
    }
    else if(randomNumber1 === 6){
        document.querySelector('img').setAttribute('src','images/dice6.png');
    }
    
}



var randomNumber2 =Math.floor(Math.random()*6+1);
function randImg2(randomNumber2){
    console.log('p2:'+randomNumber2);
    if (randomNumber2 === 1){
        document.querySelector('.img2').setAttribute('src','images/dice1.png');                      
    }
    else if(randomNumber2 === 2){
            document.querySelector('.img2').setAttribute('src','images/dice2.png');
    }
    else if(randomNumber2 === 3){
        document.querySelector('.img2').setAttribute('src','images/dice3.png');
    }
    else if(randomNumber2 === 4){
        document.querySelector('.img2').setAttribute('src','images/dice4.png');
    }
    else if(randomNumber2 === 5){
        document.querySelector('.img2').setAttribute('src','images/dice5.png');
    }
    else if(randomNumber2 === 6){
        document.querySelector('.img2').setAttribute('src','images/dice6.png');

    }
}
// randImg2(randomNumber2);
// randImg1(randomNumber1);
function Roll(){
    randImg1(randomNumber1);
    randImg2(randomNumber2);
}

// Roll();