//Checks if the answer given for puzzle 3 is correct

function ValidatePuzzle3() {
  //Get the answer the player has given and make it lowercase
  var playersAnswer = document.getElementById("puzzle3Ans").value.toLowerCase();
  //If the players answer matches the text we're looking for set the puzzle3-correct texts style.display to block, ie make it show
  if (playersAnswer.includes("Nature") || playersAnswer.includes("nature")){
    document.getElementById("puzzle3-correct").style.display = "block";    
  } else { //If the answer doesnt match, call the Puzzle6Wrong function
    Puzzle1Wrong();
  }
}

//If the answer given was wrong, the puzzle3-wrong-ans text will display
//Then we'll call the HidePuzzle3 function after 4000ms to hide the text again
function Puzzle3Wrong() {
  document.getElementById("puzzle3-wrong-ans").style.display = "block";
  wrongAnswer = setTimeout(HidePuzzle1, 4000);
}

//Hide the puzzle3-wrong-ans text
function HidePuzzle3() {
  document.getElementById("puzzle3-wrong-ans").style.display = "none";
}
