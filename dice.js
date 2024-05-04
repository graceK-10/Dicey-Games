const images = [
    "images/dice1.jpeg",
    "images/dice2.jpeg",
    "images/dice3.jpeg",
    "images/dice4.jpeg",
    "images/dice5.jpeg",
    "images/dice6.jpeg",
  ];

// initial player names and leaderboard object
let player1 = "player1";
let player2 = "player2";
let leaderboard = {};

// Function to update player names on the HTML page
function updatePlayerNames() {
    let player1 = document.getElementById("player1").value;
    player1.setAttribute("Player 1", " ");
    let player2 = document.getElementById("player2").value;
    

    document.getElementById("p.player1").textContent = player1;
    document.getElementById("p.player2").textContent = player2;


    const leaderboardPlayerNames = document.querySelector('.leaderboard-names')
    leaderboardPlayerNames.innerHTML = "";

    // Create list items for each player
    for (let i = 1; i <= 2; i++) {
        const playerName = (i === 1) ? player1 : player2;
        leaderboardPlayerNames.innerHTML += `<li><p id="players${i}">${playerName}</p></li>`;
    }
  }

  let roundsPlayed = 0;

// Rolling Dice Function
function rollDice() {

    // Check if the maximum rounds limit (5 rounds) has been reached
    if (roundsPlayed >= 5) {
        // Get the player with the highest wins
        const winner = Object.keys(leaderboard).reduce((a, b) => leaderboard[a] > leaderboard[b] ? a : b);
        const leaderboardMainContainer = document.getElementById('leaderboard-container');
        leaderboardMainContainer.innerHTML = `<h2>${winner} is the Winner!</h2>`;
        return;
    }

    // Increment the roundsPlayed counter
    roundsPlayed++;

     // Assign all dice images to the dice variable
    let dice = document.querySelectorAll("img.img");
    dice.forEach(function(die) {
        die.classList.add("roll");
    });

    // Winner results display
    let result = document.querySelector('h2')
    result.innerHTML = ""
    let leaderboardMainContainer = document.getElementById('leaderboard-container');

    // Setting a timeout feature to siùumate the dice rolling animation
    setTimeout(function() {
        dice.forEach(function(die) {
            die.classList.remove("roll");
        });

        // Generating random numbers for each dice
        let randomNumberOne = Math.floor(Math.random() * 6) + 1;
        let randomNumberTwo = Math.floor(Math.random() * 6) + 1;

 
    // Displaying the correct image based on the dice1 and 2 values
    document.querySelector("#dice-1").setAttribute("src", images[randomNumberOne - 1]);
    document.querySelector("#dice-2").setAttribute("src", images[randomNumberTwo - 1]);

        // Determining the winner and displaying the results on the leaderboard
        if (randomNumberOne === randomNumberTwo) {
            result.innerHTML = "it's A Draw! 🤝";
        } else if (randomNumberOne < randomNumberTwo) {
            result.innerHTML = (player2 + " 😎 Wins!");
            updateLeaderBoard(player2);
        } else {
            result.innerHTML = (player1 + " 🤝 Wins!");
            updateLeaderBoard(player1);
        }

        // Displaying the leaderboard on our dice game
        displayLeaderBoard(leaderboardMainContainer);

        // Initial update of player names
     updatePlayerNames();
    }, 2500);
}

// Our update leaderboard function
function updateLeaderBoard(players) {
    leaderboard[players] = (leaderboard[players] || 0) + 1;
}


// Displaying the leaderboard on our dice game
function displayLeaderBoard(main) {
    if (roundsPlayed < 5) { 
    main.innerHTML = "<ul><h2>Leaderboard</h2></ul>";
    for (let players in leaderboard) {
        main.innerHTML += `<li>${players}: ${leaderboard[players]} wins</li>`;
    }
    main.innerHTML += "</ul>";
  }
}



// Waiting for the DOM content to be fully loaded
// Call playerSubmission function when the page loads to ensure names are updated
document.addEventListener("DOMContentLoaded", function() {
    playerSubmission(1); //Updates the first players name
    playerSubmission(2); //Updates the second players name
    rollDice(); // Roll the dice when the page loads

});

function goBack() {
    window.location.href = "rules.html";
  }
  
  function quitPage() {
    window.location.href = "loader.html";
  }