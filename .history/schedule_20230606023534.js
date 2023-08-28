let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('schedule__calendar');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function load() {
    const dt = new Date();
    
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    console.log(day, month, year);
}
load();