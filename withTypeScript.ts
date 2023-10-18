const startButton = document.querySelector('[data-action="start"]') as HTMLInputElement;
const stopButton = document.querySelector('[data-action="stop"]') as HTMLInputElement;
const resetButton = document.querySelector('[data-action="reset"]') as HTMLInputElement;
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds') as HTMLInputElement;
let timerTime: number = 0;

setInterval(function() {
    timerTime++;

    const numOfMinutes = Math.floor(timerTime / 60);
    const numOfSeconds = timerTime % 60;

    minutes.innerText = numOfMinutes;
    seconds.innerText = timerTime;
}, 1000);


function startTimer() {

}

function stopTimer() {

}

function resetTimer() {

}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);