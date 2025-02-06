//Checks if the answer given for puzzle 4 is correct

function ValidatePuzzle4() {
  //Get the answer the player has given and make it lowercase
  var playersAnswer = document.getElementById("puzzle4Ans").value.toLowerCase();
  //If the players answer matches the text we're looking for set the puzzle4-correct texts style.display to block, ie make it show
  if (playersAnswer.includes("Star") || playersAnswer.includes("star")){
    document.getElementById("puzzle4-correct").style.display = "block";    
  } else { //If the answer doesnt match, call the Puzzle4Wrong function
    Puzzle4Wrong();
  }
}

//If the answer given was wrong, the puzzle4-wrong-ans text will display
//Then we'll call the HidePuzzle3 function after 4000ms to hide the text again
function Puzzle4Wrong() {
  document.getElementById("puzzle4-wrong-ans").style.display = "block";
  wrongAnswer = setTimeout(HidePuzzle1, 4000);
}

//Hide the puzzle4-wrong-ans text
function HidePuzzle4() {
  document.getElementById("puzzle4-wrong-ans").style.display = "none";
}