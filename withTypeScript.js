var startButton = document.querySelector('[data-action="start"]');
var stopButton = document.querySelector('[data-action="stop"]');
var resetButton = document.querySelector('[data-action="reset"]');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var timerTime = 0;
var isRunning = false;
var interval;
function startTimer() {
    if (isRunning)
        return;
    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
}
function stopTimer() {
    if (!isRunning)
        return;
    isRunning = false;
    clearInterval(interval);
}
function resetTimer() {
    stopTimer();
    timerTime = 0;
    minutes.innerText = '00';
    seconds.innerText = '00';
}
function incrementTimer() {
    timerTime++;
    var numOfMinutes = Math.floor(timerTime / 60);
    var numOfSeconds = timerTime % 60;
    minutes.innerText = pad(numOfMinutes);
    seconds.innerText = pad(numOfSeconds);
}
function pad(num) {
    return (num < 10) ? '0' + num : num;
    // if (num < 10) {
    //     return '0' + num;
    // } else {
    //     return num;
    // }
}
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
