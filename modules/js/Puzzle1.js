//Checks if the answer given for puzzle 1 is correct

function ValidatePuzzle1() {
  //Get the answer the player has given and make it lowercase
  var playersAnswer = document.getElementById("puzzle1Ans").value.toLowerCase();
  //If the players answer matches the text we're looking for set the puzzle6-correct texts style.display to block, ie make it show
  if (playersAnswer.includes("clock") || playersAnswer.includes("Clock")){
    document.getElementById("puzzle1-correct").style.display = "block";    
  } else { //If the answer doesnt match, call the Puzzle6Wrong function
    Puzzle1Wrong();
  }
}

//If the answer given was wrong, the puzzle1-wrong-ans text will display
//Then we'll call the HidePuzzle1 function after 4000ms to hide the text again
function Puzzle1Wrong() {
  document.getElementById("puzzle1-wrong-ans").style.display = "block";
  wrongAnswer = setTimeout(HidePuzzle1, 4000);
}

//Hide the puzzle1-wrong-ans text
function HidePuzzle1() {
  document.getElementById("puzzle1-wrong-ans").style.display = "none";
}
