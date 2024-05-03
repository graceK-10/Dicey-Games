let images = [
    "images/dice1.jpeg",
    "images/dice2.jpeg",
    "images/dice3.jpeg",
    "images/dice4.jpeg",
    "images/dice5.jpeg",
    "images/dice6.jpeg",
];

let dice = document.querySelectorAll("img");
let round = 1; // Round counter

// Initializing player objects with default values and retrieving from local storage
const player1 = {
    name: localStorage.getItem("player1Name") || "Player One",
    score: 0,
    number: 1,
  };
  
  const player2 = {
    name: localStorage.getItem("player2Name") || "Player Two",
    score: 0,
    number: 2,
  };
  
  // Function to update player names on the HTML page
  function updatePlayerNames() {
    document.getElementById("name1").innerText = player1.name;
    document.getElementById("name2").innerText = player2.name;
    document.getElementById("firstPlayer").innerText = player1.name;
    document.getElementById("secondPlayer").innerText = player2.name;
  }
  
  // Initial update of player names
  updatePlayerNames();

function rollDice() {
    // Checking for 3 rounds
    if (round > 3) {
        determineWinner();
        return;
    }

    dice.forEach(function(die) {
        die.classList.add("roll");
    });


    // Setting a timeout sos that after  the dice rolling will stop and display the value
    setTimeout(function() {
        dice.forEach(function(die) {
            die.classList.remove("roll");
    });

    // Declaring 2 variables for dice1 and dice2
    let dice1value = Math.floor(Math.random() * 6); 
    let dice2value = Math.floor(Math.random() * 6);
    // console.log(dice1value, dice2value);

    // Displaying the correct image based on the dice1 and 2 values
     const dice1 = document.querySelector("#dice-1").setAttribute("src", images[dice1value]);
     const dice2 = document.querySelector("#dice-2").setAttribute("src", images[dice2value]);

     // Update scores in the HTML
    document.getElementById("score1").textContent = dice1value + 1;
    document.getElementById("score2").textContent = dice2value + 1;

    // Comparing the dice values that will determine the winner
    if (dice1value === dice2value) {
        document.querySelector("#result").innerHTML = "Draw!";
    } else if (dice2value > dice1value) {
        document.querySelector("#result").innerHTML = player2Name + " Wins!";
    } else {
        document.querySelector("#result").innerHTML = player1Name + " Wins!";
    }

    round++;


  }, 1000);
} 


function determineWinner() {
    // Determine the winner based on the total scores
    let score1 = parseInt(document.querySelector("#score1").textContent);
    let score2 = parseInt(document.querySelector("#score2").textContent);
    let resultText = "";

    if (score1 === score2) {
        resultText = "It's a Tie!";
    } else if (score1 > score2) {
        resultText = name1 + " Won! ";

    } else {
        resultText = name2 + " Won! ";
    }

    // Updating the result text
    document.querySelector("h2").textContent = resultText;
}

function getCurrentPlayer(){
    return (round % 2 === 0) ? "Player 2" : "Player 1";
}

function updatePlayerScore(player, score) {

    // Update the score of the specified player in the HTML
    player.score += score;
    document.getElementById(`score${player.number}`).innerText = player.score;
}

rollDice();
  
function goBack() {
    window.location.href = "rules.html";
}

function quitPage() {
    window.location.href= "loader.html";
}


