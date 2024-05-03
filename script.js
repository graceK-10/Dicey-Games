// Function to submit player names
// we are using local storage as we are going to be calling these names later in another file
function submitPlayer(playerNumber) {
    const playerNameInput = document.getElementById(`player${playerNumber}`);
    const playerName = playerNameInput ? playerNameInput.value.trim() : "";
  
    if (playerNumber === 1) {
      localStorage.setItem("player1Name", playerName);
    } else if (playerNumber === 2) {
      localStorage.setItem("player2Name", playerName);
    }
  
    // Check if both names are entered
    const bothNamesEntered =
      localStorage.getItem("player1Name") && localStorage.getItem("player2Name");
    document.getElementById("continue").disabled = !bothNamesEntered;
  }
  
  function continueGame() {
    // Check if both names are entered before proceeding
    const player1Name = localStorage.getItem("player1Name");
    const player2Name = localStorage.getItem("player2Name");
  
    if (player1Name && player2Name) {
      console.log("Moving on to the Rules!");
      window.location.href = "rules.html";
    } else {
      alert("Please enter both player names before continuing the game.");
    }
  }
  
  function endGame() {
    // Clear stored player names in local storage to stop errors
    localStorage.removeItem("player1Name");
    localStorage.removeItem("player2Name");
  
    // OR : When quit button is clicked it should clear/refresh the game
    // Redirect to another HTML page when the quit button is clicked
    window.location.href = "loader.html";
  }
  
  // Reset stored player names when the page is swiped in a slick manner
  window.addEventListener("pageshow", function (event) {
    localStorage.removeItem("player1Name");
    localStorage.removeItem("player2Name");
  });


  function endGame() {
    window.location.reload();
  }
  
  function goBack() {
    window.location.href = "rules.html";
  }
  
  function startGame() {
    window.location.href = "dice.html";
  }


 // Author: thato and grace

// Patched logic for a dice game. Do not change the name of the script.
// This JavaScript file is linked to the dice.html file.

// Selecting dice elements from the HTML document
const dice1 = document.querySelector("#dice1");
const dice2 = document.querySelector("#dice2");

// Initializing player objects with default values and retrieving from local storage
const player1 = {
  name: localStorage.getItem("player1Name") || "Player One",
  score: 0,
  number: 1,
}; 