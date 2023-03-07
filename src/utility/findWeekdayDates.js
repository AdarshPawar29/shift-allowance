export function isWeekday(year, month, day) {
  var weekday = new Date(year, month, day).getDay();
  return weekday !== 6 && weekday !== 0 ? true : false;
}

function daysInMonth(month, year) {
  return 32 - new Date(year, month, 32).getDate();
}

export function getWeekdaysInMonth() {
  // all the dates from 15 to 16 formate
  const d = new Date();
  const weekdays = [];
  let selectedDate = document.getElementById("startDate");

  selectedDate = selectedDate ? new Date(selectedDate.value) : false;

  if (!isNaN(selectedDate.getTime())) {
    if (selectedDate.getDate() < 15) {
      //when user select date
      const month = selectedDate.getMonth() - 1;
      const year = selectedDate.getFullYear();
      let days = daysInMonth(month, year);
      for (let i = 16; i <= days; i++) {
        if (isWeekday(year, month, i)) {
          weekdays.push({ date: i, month: month + 1, year });
        }
      }
      for (let i = 1; i <= 15; i++) {
        if (isWeekday(year, month + 1, i)) {
          weekdays.push({ date: i, month: month + 1 + 1, year });
        }
      }
    }
    if (selectedDate.getDate() >= 15) {
      let month = selectedDate.getMonth();
      const year = selectedDate.getFullYear();
      let days = daysInMonth(month, year);
      for (let i = 16; i <= days; i++) {
        if (isWeekday(year, month, i)) {
          weekdays.push({ date: i, month: month + 1, year });
        }
      }
      month = selectedDate.getMonth() + 1;
      for (let i = 1; i <= 15; i++) {
        if (isWeekday(year, month, i)) {
          weekdays.push({ date: i, month: month + 1, year });
        }
      }
    }
  } else {
    //when field is empty
    const month = d.getMonth() - 1;
    const year = d.getFullYear();
    let days = daysInMonth(month, year);
    for (let i = 16; i <= days; i++) {
      if (isWeekday(year, month, i)) {
        weekdays.push({ date: i, month: month + 1, year });
      }
    }
    for (let i = 1; i <= 15; i++) {
      if (isWeekday(year, month + 1, i)) {
        weekdays.push({ date: i, month: month + 1 + 1, year });
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
