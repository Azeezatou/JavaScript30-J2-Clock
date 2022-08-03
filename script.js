const secondHand = document.querySelector('.secondHand');
const minuteHand = document.querySelector('.minHand');
const hourHand = document.querySelector('.hourHand');
const digitalClock = document.querySelector('.digital');

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    digitalClock.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${
        minutes < 10 ? `0${minutes}` : minutes
      } : ${seconds < 10 ? `0${seconds}` : seconds}`;
};
setInterval(setDate, 1000)