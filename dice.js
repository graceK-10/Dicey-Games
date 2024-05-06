// Array containing paths to dice images
const images = [
    "images/dice1.jpeg",
    "images/dice2.jpeg",
    "images/dice3.jpeg",
    "images/dice4.jpeg",
    "images/dice5.jpeg",
    "images/dice6.jpeg",
  ];
  
  // Retrieve player names from local storage or set default names
  let player1 = localStorage.getItem("player1") || "Player 1";
  let player2 = localStorage.getItem("player2") || "Player 2";
  let leaderboard = []; // Array to store leaderboard data
  
  // Function to update player names in local storage and on the webpage
  function updatePlayerNames() {
    player1 = document.getElementById("Player1").textContent;
    player2 = document.getElementById("Player2").textContent;
  
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);
  
    document.getElementById("Player1").textContent = player1;
    document.getElementById("Player2").textContent = player2;
  }
  
  let roundsPlayed = 0; // Counter to keep track of rounds played
  
  // Function to display winner popup with overall winner
  function displayWinnerPopup(overallWinner) {
    const winnerPopup = document.getElementById('winner-popup');
    const overallWinnerElement = document.getElementById('overall-winner');
    overallWinnerElement.textContent = overallWinner;
    winnerPopup.style.display = 'block';
  }
  
  // Function to close winner popup
  function closeWinnerPopup() {
    const winnerPopup = document.getElementById('winner-popup');
    winnerPopup.style.display = 'none';
  }
  
  // Function to roll the dice
  function rollDice() {
    if (roundsPlayed === 5) { // Check if all rounds have been played
      const overallWinner = Object.keys(leaderboard).reduce((a, b) => leaderboard[a] > leaderboard[b] ? a : b);
      if (overallWinner) {
        displayWinnerPopup(overallWinner);
      }
      return;
    }
  
    roundsPlayed++; // Increment rounds played counter
  
    // Add roll animation to dice images
    let dice = document.querySelectorAll("img.img");
    dice.forEach(function(die) {
      die.classList.add("roll");
    });
  
    // Clear result text and get leaderboard container
    let result = document.querySelector('h2')
    result.innerHTML = ""
    let leaderboardMainContainer = document.getElementById('leaderboard-container');
  
    // Delay displaying dice results to mimic rolling
    setTimeout(function() {
      // Remove roll animation from dice images
      dice.forEach(function(die) {
        die.classList.remove("roll");
      });
  
      // Generate random numbers for each dice
      let randomNumberOne = Math.floor(Math.random() * 6) + 1;
      let randomNumberTwo = Math.floor(Math.random() * 6) + 1;
  
      // Set dice images based on random numbers
      document.querySelector("#dice-1").setAttribute("src", images[randomNumberOne - 1]);
      document.querySelector("#dice-2").setAttribute("src", images[randomNumberTwo - 1]);
  
      // Determine winner and update leaderboard
      if (randomNumberOne === randomNumberTwo) {
        result.innerHTML = "It's a Draw! 🤝";
      } else if (randomNumberOne < randomNumberTwo) {
        result.innerHTML = "";
        updateLeaderBoard(player2);
      } else {
        result.innerHTML = "";
        updateLeaderBoard(player1);
      }
  
      // Display updated leaderboard
      displayLeaderBoard(leaderboardMainContainer);
    }, 2500);
  }
  
  // Function to update leaderboard data
  function updateLeaderBoard(players) {
    leaderboard[players] = (leaderboard[players] || 0) + 1;
  }
  
  // Function to display leaderboard on the webpage
  function displayLeaderBoard(main) {
    if (roundsPlayed < 6) { // Check if all rounds have been played
      main.innerHTML = "<ul><h2>Leaderboard</h2></ul>";
      for (let players in leaderboard) {
        main.innerHTML += `<li>${players}: ${leaderboard[players]} wins</li>`;
      }
      main.innerHTML += "</ul>";
    }
  }
  
  // Function to navigate back to rules page
  function goBack() {
    window.location.href = "rules.html";
  }
  
  // Function to navigate to loader page
  function quitPage() {
    window.location.href = "loader.html";
  }
  