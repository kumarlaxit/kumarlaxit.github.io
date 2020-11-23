'use strict'

let secretNumber = Math.trunc(Math.random()*20)+1;
let score =20;
let highscore=0;

document.querySelector('.number').textContent = '?';

document.addEventListener('keypress',function(e){
if (e.key == "Enter"){
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess){
    document.querySelector('.message').textContent = 'No input'
  }

  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = 'YOU WIN!';

  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
  }

  else if (guess > secretNumber) {
    if (score >1){  document.querySelector('.message').textContent = 'To High';
    score--;
    document.querySelector('.score').textContent = score;
  }
     else
     {
    document.querySelector('.message').textContent = 'You Lost The Game!';
    document.querySelector('.score').textContent = 0;
  }
  }

  else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'To Low';
    score--;
    document.querySelector('.score').textContent = score;
  }

}
});


document.querySelector('.check').addEventListener('click', function(){
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);

if (!guess){
  document.querySelector('.message').textContent = 'No input'
}

else if (guess === secretNumber) {
  document.querySelector('.message').textContent = 'correct Number';
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').textContent = secretNumber;

if (score > highscore) {
  highscore = score;
  document.querySelector('.highscore').textContent = highscore;
}
}

else if (guess > secretNumber) {
  if (score >1){  document.querySelector('.message').textContent = 'To High';
  score--;
  document.querySelector('.score').textContent = score;
}
   else
   {
  document.querySelector('.message').textContent = 'You Lost The Game!';
  document.querySelector('.score').textContent = 0;
}
}

else if (guess < secretNumber) {
  document.querySelector('.message').textContent = 'To Low';
  score--;
  document.querySelector('.score').textContent = score;
}

});

document.querySelector('.again').addEventListener('click', function () {
  score =20;
  // highscore=0;
 let secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector('.message').textContent = 'Start guessing...';
// displayMessage('Start guessing...');
document.querySelector('.score').textContent =score;
document.querySelector('.number').textContent ='?';
document.querySelector('.guess').value ='';
document.querySelector('body').style.backgroundColor = '#222';
// document.querySelector('.highscore').textContent = highscore;
});
