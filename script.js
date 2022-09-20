let clock_elementDigital = document.querySelector('.clockDigital');
let secondsElement = document.querySelector('.pointerSeconds');
let minutesElement = document.querySelector('.pointerMinutes');
let hoursElement = document.querySelector('.pointerHours');

function updateClock() {
    let timeNow = new Date();
    let hours = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();

    clock_elementDigital.innerHTML = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;

    //convert degrees to seconds
    let secondsConvert = ((360 / 60) * seconds) - 90;
    let minutesConvert = ((360 / 60) * minutes) - 90;
    let hoursConvert = ((360 / 12) * hours) - 90;

    secondsElement.style.transform = `rotate(${secondsConvert}deg)`;
    minutesElement.style.transform = `rotate(${minutesConvert}deg)`;
    hoursElement.style.transform = `rotate(${hoursConvert}deg)`;
}
function addZero(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);
updateClock();