let timer;
let isTimerRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function start_timer(){
  if (!isTimerRunning) {
    timer = setInterval(updateTimer, 1000);
    isTimerRunning = true;
  }
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  displayTimer();
}

function stop_timer() {
  clearInterval(timer);
  isTimerRunning = false;
}

function reset_timer() {
  clearInterval(timer);
  isTimerRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTimer();
}

function displayTimer() {
  const formattedHour = padTime(hours);
  const formattedMin = padTime(minutes);
  const formattedSec = padTime(seconds);
  document.getElementById("hrs").innerText = formattedHour;
  document.getElementById('min').innerText = formattedMin;
  document.getElementById("sec").innerText = formattedSec;
}

function padTime(time) {
  return time < 10 ? "0" + time : time;
}