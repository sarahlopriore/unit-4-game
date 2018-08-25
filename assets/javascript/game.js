$(document).ready(function() {

// set up variables

var computerNumber = 0;
var randomNumberSec = $("#randomNumber");
var pinkNumber = 0;
var orangeNumber = 0;
var blueNumber = 0;
var purpleNumber = 0;
var total = 0;
var win = 0;
var lose = 0;


// computer chooses a random number between 19 and 120 
var chooseNumber = function() {
    computerNumber = Math.floor(Math.random() * 101) + 19;
    randomNumberSec.text(computerNumber);
}

chooseNumber();
// random number is displayed in #randomNumber section

// computer chooses a random number between 1  and 12 for pink crystal
// computer chooses a random number between 1  and 12 for orange crystal
// computer chooses a random number between 1  and 12 for blue crystal
// computer chooses a random number between 1  and 12 for purple crystal

// when player clicks pink crystal increase the total score by random number assigned to pink crystal
// display new total score in #totalScore paragraph

// when player clicks orange crystal increase the total score by random number assigned to orange crystal
// display new total score in #totalScore paragraph

// when player clicks blue crystal increase the total score by random number assigned to blue crystal
// display new total score in #totalScore paragraph

// when player clicks purple crystal increase the total score by random number assigned to purple crystal
// display new total score in #totalScore paragraph

// if total equals the random number chosen by the computer, increase win by 1
// display "you are a winner" and new total of wins

// if total exceeds the random number chosed by the computer, increase lose by 1
// display "you are a loser" and new toatl of losses 

// if a player wins or loses reset game
// computer chooses a new random number 
// random number is displayed in #randomNumber section
// computer chooses a new random number between 1  and 12 for pink crystal
// computer chooses a new random number between 1  and 12 for orange crystal
// computer chooses a new random number between 1  and 12 for blue crystal
// computer chooses a new random number between 1  and 12 for purple crystal

})
