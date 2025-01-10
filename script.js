'use strict'
const mobileIcon = document.getElementById('mobileIcon');
const mobileNav = document.getElementById('mobileNav');

const openMenu = () => {
     mobileNav.classList.toggle('open')
}

mobileIcon.addEventListener('click', openMenu)

// script for time
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const am_pm = document.getElementById('am_pm');
console.log(am_pm)

const getHour = () => {
     let  currentHour = new Date().getHours();
     hour.textContent = currentHour;
     return currentHour;
     
}

const getMinute = () => {
     let currentMinute = new Date().getMinutes();
     minute.textContent = currentMinute;
}

setInterval(getHour, 1000);
setInterval(getMinute, 1000);

const theCurrentHour = getHour();
if (theCurrentHour > 11) {
      am_pm.textContent = 'PM'
} else {
      am_pm.textContent = 'AM'
}




