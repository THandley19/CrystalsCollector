var numtoMatch = Math.floor(Math.random() * (120 - 19) + 19);
var userTotal = 0;
var wins = 0;
var losses = 0;
var blueVal = Math.floor(Math.random() * (12 - 1) + 1);
var purpleVal = Math.floor(Math.random() * (13 - 2) + 2);
var redVal = Math.floor(Math.random() * (14 - 3) + 3);
var yellowVal = Math.floor(Math.random() * (15 - 4) + 4);

function start() {
  // Sets values for new round
  numtoMatch = Math.floor(Math.random() * (120 - 19) + 19);
  $("#numberToMatch").text(numtoMatch);
  userTotal = 0;
  $("#userTotal").text(userTotal);
  $("#wins").text(wins);
  $("#losses").text(losses);
  blueVal = Math.floor(Math.random() * (12 - 1) + 1);
  purpleVal = Math.floor(Math.random() * (13 - 2) + 2);
  redVal = Math.floor(Math.random() * (14 - 3) + 3);
  yellowVal = Math.floor(Math.random() * (15 - 4) + 4);
}

function game() {
  start();
  // Establish click events for each crystal, and add the value of the crystal to the user score.
  // After adding the score and dynamically displaying it, check to see if the user won/lost
  $("#blue-crystal").click(function () {
    userTotal += blueVal;
    $("#userTotal").text(userTotal);
    checkScore();
  });
  $("#purple-crystal").click(function () {
    userTotal += purpleVal;
    $("#userTotal").text(userTotal);
    checkScore();
  });
  $("#red-crystal").click(function () {
    userTotal += redVal;
    $("#userTotal").text(userTotal);
    checkScore();
  });
  $("#yellow-crystal").click(function () {
    userTotal += yellowVal;
    $("#userTotal").text(userTotal);
    checkScore();
  });
}
// checks to see if the user won/lost
function checkScore() {
  if (userTotal == numtoMatch) {
    alert("You've Won!");
    wins++;
    start();
  } else if (userTotal > numtoMatch) {
    alert("You Lost!");
    losses++;
    start();
  }
}

game();
