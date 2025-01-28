const timer = document.getElementById('time')
const timerSeconds = document.getElementById('seconds')

let x = setInterval(() => {
    const currentTime = new Date();

    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()

    timer.textContent = `${hours} : ${minutes}`
    timerSeconds.textContent = seconds;
    
}, 1000)                                                