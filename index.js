// Write your code here.

const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");
const divTimer = document.getElementById("timer");

let minutes = 0; // 2 digit
let seconds = 0; // 2 digit
let mseconds = 0; // 3 digit
let timerId;

startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);

function startStopwatch() {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
  timerId = setInterval(() => {
    divTimer.textContent = updateStopwatch();
    if (mseconds === 1000) {
      mseconds = 0;
      if (seconds === 59) {
        seconds = 0;
        minutes++;
      } else {
        seconds++;
      }
    }
    mseconds++;
  }, 1);
}

function updateStopwatch() {
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}:${mseconds.toString().padStart(3, "0")}`;
}

function stopStopwatch() {
  clearTimeout(timerId);
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

function resetStopwatch() {
  clearTimeout(timerId);
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
  minutes = 0; // 2 digit
  seconds = 0; // 2 digit
  mseconds = 0; // 3 digit
  divTimer.textContent = updateStopwatch();
}
