const isWeekend = day => {
    // 6 when is saturday, 0 when is sunday
    return day % 7 === 6 || day % 7 === 0;
}