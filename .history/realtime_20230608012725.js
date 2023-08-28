function updateClock() {
    var now = new Date();
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var dayOfWeek = daysOfWeek[now.getDay()];
    var dayOfMonth = now.getDate();
    var month = monthsOfYear[now.getMonth()];
    var year = now.getFullYear();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var timeString = hours.toString().padStart(2, '0') + ':' +
        minutes.toString().padStart(2, '0') + ':' +
        seconds.toString().padStart(2, '0');

    var dateString = dayOfWeek + ', ' + month + ' ' + dayOfMonth + ' ' + year;

    document.getElementById('realTimeClock').innerHTML = dateString + '<pre>\t\tTABS!\t\t</pre>' + timeString;
}

// Cập nhật đồng hồ mỗi giây
setInterval(updateClock, 1000);