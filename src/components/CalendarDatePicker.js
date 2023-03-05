import React, { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import { getWeekdaysInMonth } from "../utility/findWeekdayDates";
import InformationInput from "./InformationInput";
import SelectedDates from "./SelectedDates";

function CalendarDatePicker() {
  const [weekDays, setWeekDays] = useState({});
  const [info, setInfo] = useState(null);

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
        <InformationInput
          getInfo={getInfo}
          handleSubmit={() => setWeekDays(getWeekdaysInMonth())}
        />
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
