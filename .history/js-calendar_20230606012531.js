import {isWeekend, getDayName} from "./date-helpers.js";

const calendar = document.querySelector(".schedule");

for (let day = 1; day <= 31; day++) {
    console.log(getDayName(day));
    
    const weekend = isWeekend(day);
    
    calendar.insertAdjacentHTML("beforeend", `<div class="day ${weekend ? "weekend" : ""}">${day}</div>`);
}