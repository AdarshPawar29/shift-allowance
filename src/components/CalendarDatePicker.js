import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getWeekdaysInMonth } from "../utility/findWeekdayDates";
import InformationInput from "./InformationInput";
import SelectedDates from "./SelectedDates";

function CalendarDatePicker() {
  const [weekDays, setWeekDays] = useState(getWeekdaysInMonth());
  const [info, setInfo] = useState(null);

  useEffect(() => {
    console.log(weekDays);
  }, [weekDays]);

  const onChange = (event) => {
    const selectedDate = event.getDate();
    if (weekDays.findIndex((item) => item.date === selectedDate) >= 0) {
      alert("date already in table!");
    } else {
      const updatedDays = [
        {
          date: selectedDate,
          month: event.getMonth() + 1,
          year: event.getFullYear(),
        },
        ...weekDays,
      ];
      setWeekDays(updatedDays);
    }
  };

  const removeDateFromTable = (date) => {
    const updatedDays = weekDays.filter(function (obj) {
      return obj.date !== date;
    });
    setWeekDays(updatedDays);
  };

  const getInfo = (infoObj) => {
    setInfo(infoObj);
  };

  return (
    <div>
      <div className="calender-and-input">
        <Calendar onChange={onChange} />
        <InformationInput getInfo={getInfo} />
      </div>
      {info && (
        <SelectedDates
          info={info}
          weekDays={weekDays}
          removeDateFromTable={removeDateFromTable}
        />
      )}
    </div>
  );
}
export default CalendarDatePicker;
