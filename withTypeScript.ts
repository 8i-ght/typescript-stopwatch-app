const startButton = document.querySelector('[data-action="start"]') as HTMLInputElement;
const stopButton = document.querySelector('[data-action="stop"]') as HTMLInputElement;
const resetButton = document.querySelector('[data-action="reset"]') as HTMLInputElement;
const minutes = document.querySelector('.minutes') as HTMLInputElement | HTMLElement;
const seconds = document.querySelector('.seconds') as HTMLInputElement | HTMLElement;
let timerTime: number = 0;
let isRunning: boolean = false;
let interval: any;

function startTimer() {
    if (isRunning) return;

    isRunning = true;
    interval = setInterval(incrementTimer, 1000);
}

function stopTimer() {
    if (!isRunning) return;

    isRunning = false;
    clearInterval(interval);
}

function resetTimer(): void {
    stopTimer();

    timerTime = 0;
    minutes.innerText = '00';
    seconds.innerText = '00';
}

function incrementTimer() {
        timerTime++;
    
        const numOfMinutes = Math.floor(timerTime / 60);
        const numOfSeconds = timerTime % 60;
    
        minutes.innerText = pad(numOfMinutes) as any;
        seconds.innerText = pad(numOfSeconds) as any;
}

function pad(num: number) {
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