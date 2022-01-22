import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getWeekdaysInMonth } from "../utility/findWeekdayDates";

function CalendarDatePicker() {
  const weekDays = getWeekdaysInMonth();
  const [value, setValue] = useState();

  const onChange = () => {
    console.log(value);
  };
  useEffect(() => {
    console.log(weekDays);
  }, []);

  return (
    <div>
      <Calendar onChange={onChange} defaultValue={value} />
    </div>
  );
}
export default CalendarDatePicker;
