const images = [
    "images/dice1.jpeg",
    "images/dice2.jpeg",
    "images/dice3.jpeg",
    "images/dice4.jpeg",
    "images/dice5.jpeg",
    "images/dice6.jpeg",
  ];

  let player1 = localStorage.getItem("player1") || "Player 1"; // Initialize with local storage or default
  let player2 = localStorage.getItem("player2") || "Player 2"; // Initialize with local storage or default
  let leaderboard = [];
  
  function updatePlayerNames() {
    player1 = document.getElementById("Player1").textContent;
    player2 = document.getElementById("Player2").textContent;
  
    localStorage.setItem("player1", player1); // Update local storage with new values
    localStorage.setItem("player2", player2); // Update local storage with new values
  
    document.getElementById("Player1").textContent = player1;
    document.getElementById("Player2").textContent = player2;
  
  }
  
  let roundsPlayed = 0;
  
  function displayWinnerPopup(overallWinner) {
    const winnerPopup = document.getElementById('winner-popup');
    const overallWinnerElement = document.getElementById('overall-winner');
    overallWinnerElement.textContent = overallWinner;
    winnerPopup.style.display = 'block';
  }
  
  function closeWinnerPopup() {
    const winnerPopup = document.getElementById('winner-popup');
    winnerPopup.style.display = 'none';
  }
  
  function rollDice() {
    if (roundsPlayed === 5) {
        const overallWinner = Object.keys(leaderboard).reduce((a, b) => leaderboard[a] > leaderboard[b] ? a : b);
        if (overallWinner) {
            displayWinnerPopup(overallWinner);
        }
        return;
    }
  
    roundsPlayed++;
  
    let dice = document.querySelectorAll("img.img");
    dice.forEach(function(die) {
        die.classList.add("roll");
    });
  
    let result = document.querySelector('h2')
    result.innerHTML = ""
    let leaderboardMainContainer = document.getElementById('leaderboard-container');
  
    setTimeout(function() {
        dice.forEach(function(die) {
            die.classList.remove("roll");
        });
  
        let randomNumberOne = Math.floor(Math.random() * 6) + 1;
        let randomNumberTwo = Math.floor(Math.random() * 6) + 1;
  
        document.querySelector("#dice-1").setAttribute("src", images[randomNumberOne - 1]);
        document.querySelector("#dice-2").setAttribute("src", images[randomNumberTwo - 1]);
  
        if (randomNumberOne === randomNumberTwo) {
            result.innerHTML = "It's a Draw! 🤝";
        } else if (randomNumberOne < randomNumberTwo) {
            result.innerHTML = "";
            updateLeaderBoard(player2);
        } else {
            result.innerHTML = "";
            updateLeaderBoard(player1);
        }
  
        displayLeaderBoard(leaderboardMainContainer);
    }, 2500);
  }
  
  function updateLeaderBoard(players) {
    leaderboard[players] = (leaderboard[players] || 0) + 1;
  }
  
  function displayLeaderBoard(main) {
    if (roundsPlayed < 6) {
        main.innerHTML = "<ul><h2>Leaderboard</h2></ul>";
        for (let players in leaderboard) {
            main.innerHTML += `<li>${players}: ${leaderboard[players]} wins</li>`;
        }
        main.innerHTML += "</ul>";
    }
  }
  
  
  function goBack() {
    window.location.href = "rules.html";
  }
  
  function quitPage() {
    window.location.href = "loader.html";
  }
  