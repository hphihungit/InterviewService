const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".current-date");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // getting last date of month
    
    for (let i = 1; i <= lastDateofMonth; i++) {
        console.log(i);
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
}
renderCalendar();