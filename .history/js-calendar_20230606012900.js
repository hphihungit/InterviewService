import {isWeekend, getDayName} from "./date-helpers.js";

const calendar = document.querySelector(".schedule");

for (let day = 1; day <= 31; day++) {
    const weekend = isWeekend(day);
    const dayName = getDayName(day);
    
    calendar.insertAdjacentHTML("beforeend", `<div class="day ${weekend ? "weekend" : ""}"><div class="name">${dayName}</div>${day}</div>`);
}