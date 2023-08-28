const isWeekend = day => {
    // 6 when is saturday, 0 when is sunday
    return day % 7 === 6 || day % 7 === 0;
}

const getDayName = day => {
    const date = new Date(Date.UTC(2018, 0, day));
    const options = { weekday: "short" };
    return new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
}

export {isWeekend, getDayName}