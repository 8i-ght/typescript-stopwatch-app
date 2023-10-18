var startButton = document.querySelector('[data-action="start"]');
var stopButton = document.querySelector('[data-action="stop"]');
var resetButton = document.querySelector('[data-action="reset"]');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');
var timerTime = 0;
function startTimer() {
}
function stopTimer() {
}
function resetTimer() {
}
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
