const inputs = document.querySelectorAll("input");
const startCountdownBtn = document.getElementById("start-countdown");
const countdownMessage = document.getElementById("countdown-message");
const rightNowMessage = document.getElementById("rightNowMessage");
let intervalId;

function present_time() {
    rightNowMessage.textContent = new Date();
    setInterval(() => {
        present_time()
    }, 1000);
}
present_time()
function clock(endDate) {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff < 0) {
        countdownMessage.textContent = "Countdown has ended!";
        clearInterval(intervalId);
        return;
    }

    inputs[1].value = Math.floor(diff / 3600 / 24);
    inputs[2].value = Math.floor(diff / 3600) % 24;
    inputs[3].value = Math.floor(diff / 60) % 60;
    inputs[4].value = Math.floor(diff) % 60;
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
