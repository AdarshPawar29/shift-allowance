import React from "react";
import { Button } from "react-bootstrap";

function SelectedDates({ weekDays, removeDateFromTable, info }) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const getDayOfWeek = (date, month, year) => {
    const d = new Date(`${month}/${date}/${year}`);
    return days[d.getDay()];
  };
  return (
    <div className="container-table">
      <h3 className="p-3 text-center">List of days</h3>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Email</th>
            <th>Employee Name</th>
            <th>Project Code</th>
            <th>Project Name</th>
            <th>Allowance Type</th>
            <th>Tmp for notes (validation)</th>
            <th>Frequency</th>
            <th>No. of Days</th>
            <th>For Date (dd/mm/yyyy)</th>
            <th>Day</th>
            <th>From Time</th>
            <th>To Time</th>
            <th>Allowance Amount (INR)</th>
            <th>Remove Date</th>
          </tr>
        </thead>
        <tbody>
          {weekDays &&
            weekDays.map((date) => (
              <tr key={date.date}>
                <td>{info.email}</td>
                <td>{info.name}</td>
                <td>{info.projectCode}</td>
                <td>{info.projectName}</td>
                <td>Shift Allowance</td>
                <td></td>
                <td>Daily</td>
                <td>1</td>
                <td>
                  {date.date}/{date.month}/{date.year}
                </td>
                <td>{getDayOfWeek(date.date, date.month, date.year)}</td>
                <td>2PM IST</td>
                <td>11PM IST</td>
                <td>{info.allowanceAmount}</td>
                <td>
                  <Button
                    onClick={() => removeDateFromTable(date.date)}
                    variant="outline-danger"
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default SelectedDates;
