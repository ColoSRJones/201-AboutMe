'use strict';

var questions =['Can I able to hear the sounds?','Do I like color is pink?', 'Am I from Colorado?','Do I know how to code?!','Can I eat high sodium foods?'];
var myanswers = ['yes','no','yes','yes','no'];
var responses = [];
var correctCount = 0;
var userName = prompt('Welcome to my website About Me, What is your name?');

function game1() {
  alert('Great ' + userName + '! Let us play a game, can you get these next 5 questions about me correct?');
  alert('Just a reminder, use only "yes" and "no" for your answers');
  for ( var i=0; i <= questions.length; i++){
    if ( i === questions.length){
      alert('You got '+ correctCount + ' of 5 questions correct... so far.');
      break;
    }
    var guess = prompt(questions[i]).toLowerCase().trim();
    responses.push(guess);
    console.log('the question was '+questions[i]+'. And the guess was '+guess+'.');

    if ( guess !== 'yes' && guess !== 'no'){
      alert('Try again.');
      responses.pop(responses[i]);
      i--;
      console.log('Their answer was not correct format!');
      continue;
    }
    if( guess === myanswers[i]){
      console.log("Correct guess!");
      alert('Correct!');
      correctCount++;
    }
    if (guess !== myanswers[i]){
      console.log('They got it wrong');
      alert('Wrong!');
    }
  }
}

function game2() {
  alert('Ok '+ userName + '. Now You will have to guess my favorite number. Hint: it is between 0 and 10.');
  var nums = [Math.floor(Math.random()*11)];
  var myNum = nums[0];

  for(var i = 1; i < 7; i++){
    if (nums.length === 7){
      alert('You Lose!! My favorite number is ' + myNum + '.');
      break;
    }
    var guessNum = parseInt(prompt('What is my favorite number?'));
    nums.push(guessNum);

    if (guessNum !== parseInt(guessNum)){
      alert('You did not select a number. Try again.');
      nums.pop(nums[i]);
      continue;
    }
    if (guessNum === myNum){
      alert('You Win!!');
      correctCount++;
      break;
    }
    if (guessNum > myNum){
      alert('Your guess was too high.');
    }
    if (guessNum < myNum){
      alert('Your guess was too low');
    }
  }
  alert('Hey ' + userName + ' You have gotten through some questions! By the way, last question was a trick! Oops it was random, this time it was '+ myNum + '. Awesome, one more guessing game to go.');
}

function game3() {
  var myStates = ['colorado','texas'];
  var guessesRemaining = 6;
  var guess = prompt('Can you guess a state that I have lived in besides Iowa? You have ' + guessesRemaining + ' guesses remaining.').toLowerCase();
  while(guessesRemaining > 1) {
    guessesRemaining--;
    if(myStates.includes(guess)) {
      console.log("Correct");
      break;
    } else {
      guess = prompt('Guess another state. You have ' + guessesRemaining + ' guesses remaining.');
    }
  }
  console.log('The states I\'ve lived in include: ' + myStates.toString());
}



// For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.
game1();
game2();
game3();


alert('OK ' + userName + ' the game is over. You got ' + correctCount + ' questions correct! Enjoy my page now.');

