import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { getWeekdaysInMonth } from "../utility/findWeekdayDates";
import InformationInput from "./InformationInput";
import SelectedDates from "./SelectedDates";
import InfoCard from "./InfoCard";

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
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Shift Allowances
        </a>
      </nav>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Box p={2}>
            <InformationInput
              weekDays={weekDays}
              info={info}
              getInfo={getInfo}
              handleSubmit={() => setWeekDays(getWeekdaysInMonth())}
            />
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box p={2}>
            {info ? (
              <SelectedDates
                info={info}
                weekDays={weekDays}
                removeDateFromTable={removeDateFromTable}
              />
            ) : (
              <InfoCard />
            )}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default CalendarDatePicker;
