import moment from "moment";

export function isWeekday(year, month, day) {
  var weekday = new Date(year, month, day).getDay();
  return weekday !== 6 && weekday !== 0 ? true : false;
}

function daysInMonth(month, year) {
  return 32 - new Date(year, month, 32).getDate();
}

let enumerateDaysBetweenDates = function (startDate, endDate) {
  let dates = [];

  while (startDate.isSameOrBefore(endDate)) {
    let month = startDate.get("month") + 1;
    let year = startDate.get("year");
    // Filter weekend days
    if (startDate.isoWeekday() !== 6 && startDate.isoWeekday() !== 7) {
      dates.push({date: startDate.get("date"), month: month, year});
    }
    startDate.add(1, "days");
  }
  return dates;
};

export function getWeekdaysInMonth() {
  // all the dates from 15 to 16 formate
  const d = new Date();
  const weekdays = [];
  let selectedDate = document.getElementById("startDate");

  selectedDate = selectedDate ? new Date(selectedDate.value) : false;

  let startDate = moment(selectedDate, "DD/MM/YYYY");

  let endDate = moment({
    year: startDate.get("year"),
    month: startDate.get("month") + 1,
    day: 15
  });

  const workingDays = enumerateDaysBetweenDates(startDate,endDate);
  return workingDays;
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
