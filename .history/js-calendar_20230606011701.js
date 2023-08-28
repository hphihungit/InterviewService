import { isWeekend } from "./date-helpers.mjs";

const calendar = document.querySelector(".schedule");

for (let day = 1; day <= 31; day++) {
    const date = new Date(Date.UTC(2018, 0, day));
    const options = { weekday: "short" };
    const dayName = new Intl.DateTimeFormat("en-US", options).format(date);
    console.log(dayName);
    
    const weekend = isWeekend(day);
    
    calendar.insertAdjacentHTML("beforeend", `<div class="day ${weekend ? "weekend" : ""}">${day}</div>`);
}