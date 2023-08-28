const calendar = document.querySelector(".schedule");
const isWeekend = day => {
    return true;
}

for (let day = 1; day <= 31; day++) {

    const weekend = isWeekend(day)

    calendar.insertAdjacentHTML("beforeend", `<div class="day">${day}</div>`);
}