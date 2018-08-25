$(document).ready(function() {

// set up variables

var computerNumber = 0;
var randomNumberSec = $("#randomNumber");
var pinkNumber;
var orangeNumber;
var blueNumber;
var purpleNumber;
var total = 0;
var totalScoreSec = $("#totalScore");
var win = 0;
var winDisplay = $("#wins");
var lose = 0;
var loseDisplay = $("#losses");
var resultDisplay = $("#result");


// computer chooses a random number between 19 and 120 
// random number is displayed in #randomNumber section
var chooseNumber = function() {
    computerNumber = Math.floor(Math.random() * 102) + 19;
    randomNumberSec.text(computerNumber);
}

// computer chooses a random number between 1  and 12 for pink crystal
var pickPink = function() {
    pinkNumber = Math.floor(Math.random() * 12) + 1;
}

// computer chooses a random number between 1  and 12 for orange crystal
var pickOrange = function() {
    orangeNumber = Math.floor(Math.random() * 11) + 1;
}

// computer chooses a random number between 1  and 12 for blue crystal
var pickBlue = function() {
    blueNumber = Math.floor(Math.random() * 11) + 1;
}

// computer chooses a random number between 1  and 12 for purple crystal
var pickPurple = function() {
    purpleNumber = Math.floor(Math.random() * 11) + 1;
}


// when player clicks pink crystal increase the total score by random number assigned to pink crystal
// display new total score in #totalScore paragraph
$(document).on("click", "#pink", function() {
    total += pinkNumber;
    totalScoreSec.text(total);
    youWin();
    youLose();
})

// when player clicks orange crystal increase the total score by random number assigned to orange crystal
// display new total score in #totalScore paragraph
$(document).on("click", "#orange", function() {
    total += orangeNumber;
    totalScoreSec.text(total);
    youWin();
    youLose();
})

// when player clicks blue crystal increase the total score by random number assigned to blue crystal
// display new total score in #totalScore paragraph
$(document).on("click", "#blue", function() {
    total += blueNumber;
    totalScoreSec.text(total);
    youWin();
    youLose();
})

// when player clicks purple crystal increase the total score by random number assigned to purple crystal
// display new total score in #totalScore paragraph
$(document).on("click", "#purple", function() {
    total += purpleNumber;
    totalScoreSec.text(total);
    youWin();
    youLose();
})

// if total equals the random number chosen by the computer, increase win by 1
// display "you are a winner" and new total of wins
var youWin = function() {
    if (total === computerNumber) {
        win++;
        winDisplay.text("Wins: " + win);
        resultDisplay.text("You are a winner!");
        chooseNumber();
        pickPink();
        pickOrange();
        pickBlue();
        pickPurple();
        totalScoreSec.empty();
        total = 0;
    }
}

// if total exceeds the random number chosed by the computer, increase lose by 1
// display "you are a loser" and new total of losses 
var youLose = function () {
    if (total >= computerNumber) {
        lose++;
        loseDisplay.text("Losses: " + lose);
        resultDisplay.text("You are a loser!");
        chooseNumber();
        pickPink();
        pickOrange();
        pickBlue();
        pickPurple();
        totalScoreSec.empty();
        total = 0;
    }
}

// if a player wins or loses reset game

chooseNumber();
pickPink();
pickOrange();
pickBlue();
pickPurple();


})
