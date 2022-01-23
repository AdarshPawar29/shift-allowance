export function isWeekday(year, month, day) {
  var weekday = new Date(year, month, day).getDay();
  return weekday !== 1 && weekday !== 0 ? true : false;
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
    if (isWeekday(year, month, i + 1)) {
      weekdays.push({ date: i, month: month + 1, year });
    }
  }
  return weekdays;
}
