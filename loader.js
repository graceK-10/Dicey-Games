// Use setTimeout to execute a function after a specified delay
// this is a built in function in js
let countdown = 13;

// Display the initial countdown
updateCountdown();

const countdownInterval = setInterval(function () {
  countdown -= 1;
  updateCountdown();

  if (countdown <= 0) {
    clearInterval(countdownInterval);
    window.location.href = "index.html";
  }
}, 1000); // Update the countdown every 1000 milliseconds (1 second)

function updateCountdown() {
  // Update the countdown display on the page
  const countdownDisplay = document.getElementById("countdownDisplay");
  countdownDisplay.textContent = `Ska wara Boss, in ${countdown} seconds uzoba right`;
}