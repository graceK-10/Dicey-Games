let images = [
    "images/dice1.jpeg",
    "images/dice2.jpeg",
    "images/dice3.jpeg",
    "images/dice4.jpeg",
    "images/dice5.jpeg",
    "images/dice6.jpeg",
];

let dice = document.querySelectorAll("img");

function rollDice() {
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
    console.log(dice1value,dice2value);

    // Displaying the correct image based on the dice1 and 2 values
    document.querySelector("#dice-1").setAttribute("src", images[dice1value]);
    document.querySelector("#dice-2").setAttribute("src", images[dice2value]);

    // Displaying the total value of the sum of dice1 and 1 values
    document.querySelector("#total").innerHTML = "Your Roll is " + ( (dice1value + 1) + (dice2value + 1) );
},
1000
);
}
roll();

  
function goBack() {
    window.location.href = "rules.html";
}

function quitPage() {
    window.location.href= "loader.html";
}
