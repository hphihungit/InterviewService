const calendar = document.querySelector(".schedule");
const isWeekend = day => {
    return day % 7 === 6 || day % 7 === 0;
}

for (let day = 1; day <= 31; day++) {

    const weekend = isWeekend(day);
    
    calendar.insertAdjacentHTML("beforeend", `<div class="day ${weekend ? "weekend" : ""}">${day}</div>`);
}