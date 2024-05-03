function rollDice() {

    // F U N C T I O N   T O   R O L L  T H E   D I C E   
    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");

  //   r o l l i n g   d i c e s   
    diceNum1.setAttribute("src", "images/dice-3.jpeg")
    diceNum2.setAttribute("src", "images/dice-4.jpeg")


    let result = document.querySelector('h2')
    result.innerHTML = ""

//   //  Try catch block to handle errors 
//     try {
//     setTimeout(() => {
//         let randomNumber1 = Math.floor(Math.random() * 6) + 1;
//         let randomNumber2 = Math.floor(Math.random() * 6) + 1;

//         diceNum1.setAttribute('src', 'images/dice' + randomNumber1 + '.jpeg');
//         diceNum2.setAttribute('src', 'images/dice' + randomNumber2 + '.jpeg');

//         //determine the winner
//         if (randomNumber1 === randomNumber2) {
//             result.innerHTML = "Draw!"
//         }
//         else if (randomNumber1 < randomNumber2) {
//             result.innerHTML = <span class='winner-name'> + player2Name + </span> + "Won! ";
//         }
//         else {
//             result.innerHTML = <span class='winner-name'> + player1Name + </span> + "Won! ";
//         }

//     }, 2500);

// } catch(error) {
//   // Displays error message 
//   console.log(error.message);
// }
}

function goBack() {
    window.location.href = "rules.html";
}

function quitPage() {
    window.location.href= "loader.html";
}