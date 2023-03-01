export function isWeekday(year, month, day) {
  var weekday = new Date(year, month, day).getDay();
  return weekday !== 6 && weekday !== 0 ? true : false;
}

function daysInMonth(month, year) {
  return 32 - new Date(year, month, 32).getDate();
}

export function getWeekdaysInMonth() {
  const d = new Date();
  const month = d.getMonth();
  const year = d.getFullYear();
  const days = daysInMonth(month, year);
  const weekdays = [];
  for (let i = 1; i <= days; i++) {
    if (isWeekday(year, month, i)) {
      weekdays.push({ date: i, month: month + 1, year });
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
