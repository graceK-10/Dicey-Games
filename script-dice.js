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