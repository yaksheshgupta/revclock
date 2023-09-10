const inputs = document.querySelectorAll("input");
const startCountdownBtn = document.getElementById("start-countdown");
const countdownMessage = document.getElementById("countdown-message");
const rightNowMessage = document.getElementById("rightNowMessage");
let intervalId;

function present_time() {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
    };
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", options);
    const formattedDateWithoutAt = formattedDate.replace("at", "");
    rightNowMessage.textContent = formattedDateWithoutAt;
}

function clock(endDate) {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff < 0) {
        countdownMessage.textContent = "Countdown has ended!";
        clearInterval(intervalId);
        return;
    }

    const days = Math.floor(diff / (3600 * 24)); // Calculate days
    const hours = Math.floor((diff % (3600 * 24)) / 3600); // Calculate hours
    const minutes = Math.floor((diff % 3600) / 60); // Calculate minutes
    const seconds = Math.floor(diff % 60); // Calculate seconds

    inputs[1].value = days;
    inputs[2].value = hours;
    inputs[3].value = minutes;
    inputs[4].value = seconds;

    countdownMessage.textContent = "";
}

startCountdownBtn.addEventListener("click", () => {
    const userDateInput = document.getElementById("user-date");
    const userEndDate = userDateInput.value;

    if (!userEndDate) {
        countdownMessage.textContent = "Please enter a valid date!";
        return;
    }

    clearInterval(intervalId);
    clock(userEndDate);

    intervalId = setInterval(() => {
        clock(userEndDate);
    }, 1000);
});

present_time();

setInterval(() => {
    present_time();
}, 10);
