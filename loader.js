let countdown = 5;

// Calling my update countdown function the initial countdown
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
  const countdownDisplay = document.getElementById("countdownTimer");
  countdownDisplay.textContent = `Back to Home Page in ${countdown} seconds`;
}
