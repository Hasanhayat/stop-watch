let h1 = document.querySelector("h1");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

let minutes = 0;
let hours = 0;
let seconds = 0;
let intervalId = null;

function updateWatch() {
  let formattedHours, formattedMinutes, formattedSeconds;

  if (hours < 10) {
    formattedHours = "0" + hours;
  } else {
    formattedHours = hours;
  }

  if (minutes < 10) {
    formattedMinutes = "0" + minutes;
  } else {
    formattedMinutes = minutes;
  }

  if (seconds < 10) {
    formattedSeconds = "0" + seconds;
  } else {
    formattedSeconds = seconds;
  }

  h1.innerText =
    formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
}

startBtn.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
      updateWatch();
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateWatch();
});

updateWatch();
