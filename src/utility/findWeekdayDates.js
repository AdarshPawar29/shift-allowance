export function isWeekday(year, month, day) {
  var weekday = new Date(year, month, day).getDay();
  return weekday !== 6 && weekday !== 0 ? true : false;
}

function daysInMonth(month, year) {
  return 32 - new Date(year, month, 32).getDate();
}

export function getWeekdaysInMonth() {
  // all the dates from 15 to 16
  const d = new Date();
  const weekdays = [];
  if (d.getDate() < 15) {
    const month = d.getMonth() - 1;
    const year = d.getFullYear();
    let days = daysInMonth(month, year);
    for (let i = 15; i <= days; i++) {
      if (isWeekday(year, month, i)) {
        weekdays.push({ date: i, month: month + 1, year });
      }
    }
    days = daysInMonth(month + 1, year);
    for (let i = 1; i <= 16; i++) {
      if (isWeekday(year, month + 1, i)) {
        weekdays.push({ date: i, month: month + 1 + 1, year });
      }
    }
  }
  if (d.getDate() >= 15) {
    let month = d.getMonth();
    const year = d.getFullYear();
    let days = daysInMonth(month, year);
    for (let i = 15; i <= days; i++) {
      if (isWeekday(year, month, i)) {
        weekdays.push({ date: i, month: month + 1, year });
      }
    }
    month = d.getMonth() + 1;
    days = daysInMonth(month, year);
    for (let i = 1; i <= 16; i++) {
      if (isWeekday(year, month, i)) {
        weekdays.push({ date: i, month: month + 1, year });
      }
    }
  }
  return weekdays;
}
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const getDayOfWeek = (date, month, year) => {
  const d = new Date(`${month}/${date}/${year}`);
  return days[d.getDay()];
};

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function onTimeChange() {
  var timeSplit = inputEle.value.split(":"),
    hours,
    minutes,
    meridian;
  hours = timeSplit[0];
  minutes = timeSplit[1];
  if (hours > 12) {
    meridian = "PM";
    hours -= 12;
  } else if (hours < 12) {
    meridian = "AM";
    if (hours == 0) {
      hours = 12;
    }
  } else {
    meridian = "PM";
  }
  alert(hours + ":" + minutes + " " + meridian);
}
