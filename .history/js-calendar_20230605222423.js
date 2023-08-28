const calendar = document.querySelector("#calendar__page");

for (let day = 1; day <= 31; day++) {
    console.log(day);

    calendar.insertAdjacentHTML("beforeend", `div class="day">${day}</div>`);
}