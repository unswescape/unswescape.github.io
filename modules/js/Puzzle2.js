//Checks if the answer given for puzzle 2 is correct

//If the correct multiple option answer was selected, display the puzzle4-correct text
function ValidatePuzzle2() {
  document.getElementById("puzzle2-correct").style.display = "block";
}

//If the wrong answer was selected, display the puzzle4-wrong-ans text
//Then call the hidePuzzle4 function after 4000ms
function Puzzle2Wrong() {
  document.getElementById("puzzle2-wrong-ans").style.display = "block";
  wrongAnswer = setTimeout(hidePuzzle2, 4000);
}

//Hide the puzzle2-wrong-ans text
function hidePuzzle2() {
  document.getElementById("puzzle2-wrong-ans").style.display = "none";
}
