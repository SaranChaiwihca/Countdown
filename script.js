// Set the countdown date
const countdownDate = new Date("2023-06-20T17:30:00").getTime();

// Update the countdown every second
const countdown = setInterval(() => {
  // Get current date and time
  const now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  const distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").textContent = days + "d";
  document.getElementById("hours").textContent = hours + "h";
  document.getElementById("minutes").textContent = minutes + "m";
  document.getElementById("seconds").textContent = seconds + "s";

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("days").textContent = "Expired";
    document.getElementById("hours").textContent = "";
    document.getElementById("minutes").textContent = "";
    document.getElementById("seconds").textContent = "";
  }
}, 1000);
