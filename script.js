// Countdown Timer
const countdownDate = new Date("YYYY-MM-DDT00:00:00").getTime(); // Replace with Vikas's birthday date and time

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        document.getElementById("timer").innerHTML = "Happy Birthday, Vikas!";
        clearInterval(timerInterval);
        return;
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${hours}:${minutes}:${seconds}`;
}

const timerInterval = setInterval(updateCountdown, 1000);

// Guestbook Function
function addMessage() {
    const message = document.getElementById("message").value;
    if (message) {
        const newMessage = document.createElement("p");
        newMessage.textContent = message;
        document.getElementById("guestMessages").appendChild(newMessage);
        document.getElementById("message").value = "";
    }
}
