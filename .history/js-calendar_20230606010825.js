const calendar = document.querySelector(".schedule");
const isWeekend = day => {
    // 6 when is saturday, 0 when is sunday
    return day % 7 === 6 || day % 7 === 0;
}

for (let day = 1; day <= 31; day++) {
    const date = Date.now();
    const options = { weekday: "short" };
    const dayName = new Intl.DateTimeFormat("en-US", options).format(date);
    console.log(dayName);
    
    const weekend = isWeekend(day);
    
    calendar.insertAdjacentHTML("beforeend", `<div class="day ${weekend ? "weekend" : ""}">${day}</div>`);
}