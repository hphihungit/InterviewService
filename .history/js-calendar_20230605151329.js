const currentDate = document.querySelector(".current-date");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const renderCalendar = () => {
    currentDate.innerText = `${currMonth} ${currYear}`;
}
renderCalendar();