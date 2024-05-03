const images = [
    "images/dice1.jpeg",
    "images/dice2.jpeg",
    "images/dice3.jpeg",
    "images/dice4.jpeg",
    "images/dice5.jpeg",
    "images/dice6.jpeg",
  ];
  
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
  
  let dice = document.querySelectorAll("img");
  let round = 1; // Round counter
  const totalRounds = 3; // Total rounds
  
  function updatePlayerNames() {
    document.getElementById("name1").innerText = player1.name;
    document.getElementById("name2").innerText = player2.name;
    document.getElementById("firstPlayer").innerText = player1.name;
    document.getElementById("secondPlayer").innerText = player2.name;
  }
  
  function updateScores() {
    document.getElementById("score1").textContent = player1.score;
    document.getElementById("score2").textContent = player2.score;
  }
  
  function rollDice() {
    if (round > totalRounds) {
      determineWinner();
      return;
    }
  
    dice.forEach(function (die) {
      die.classList.add("roll");
    });
  
    setTimeout(function () {
      dice.forEach(function (die) {
        die.classList.remove("roll");
      });
  
      let dice1value = Math.floor(Math.random() * 6);
      let dice2value = Math.floor(Math.random() * 6);
  
      document.querySelector("#dice-1").setAttribute("src", images[dice1value]);
      document.querySelector("#dice-2").setAttribute("src", images[dice2value]);
  
      player1.score += dice1value + 1;
      player2.score += dice2value + 1;
  
      updateScores();
  
      round++;
      rollDice(); // Roll dice for the next round
    }, 1000);
  }
  
  function determineWinner() {
    let resultText;
    if (player1.score > player2.score) {
      resultText = player1.name;
    } else if (player2.score > player1.score) {
      resultText = player2.name;
    }
    document.querySelector("h2").textContent = resultText;
  }


  updatePlayerNames();
  rollDice();

  function goBack() {
    window.location.href = "rules.html";
  }
  
  function quitPage() {
    window.location.href = "loader.html";
  }
  
