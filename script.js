let dateContainer = document.querySelector(".date-container");
let hoursContainer = document.querySelector(".hours");
let minutesContainer = document.querySelector(".minutes");
let secondsContainer = document.querySelector(".seconds");

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function updateClock() {
    const today = new Date();

    let date = today.getDate();  
    let day = weekdays[today.getDay()];  
    let month = monthNames[today.getMonth()];  

    let hours = formatTime(today.getHours());
    let minutes = formatTime(today.getMinutes());
    let seconds = formatTime(today.getSeconds());
 
    dateContainer.innerHTML = `<p>${day}</p><p>${date}</p><p>${month}</p>`;

    
    hoursContainer.innerHTML = hours + ":";
    minutesContainer.innerHTML = minutes + ":";
    secondsContainer.innerHTML = seconds;
}

 
setInterval(updateClock, 1000);

 
updateClock();
