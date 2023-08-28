import {isWeekend} from "./date-helpers";
import { parse } from 'node-html-parser'; 
const parse = require('node-html-parser');

const calendar = document.querySelector(".schedule");

for (let day = 1; day <= 31; day++) {

    const weekend = isWeekend(day);
    
    calendar.insertAdjacentHTML("beforeend", `<div class="day ${weekend ? "weekend" : ""}">${day}</div>`);
}