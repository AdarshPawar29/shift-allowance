import React from "react";
import { Button } from "react-bootstrap";

function SelectedDates({ weekDays, removeDateFromTable, info }) {
  return (
    <div className="container">
      <h3 className="p-3 text-center">List of days</h3>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Project Name</th>
            <th>date</th>
            <th>Remove Date</th>
          </tr>
        </thead>
        <tbody>
          {weekDays &&
            weekDays.map((date) => (
              <tr key={date.date}>
                <td>{info.name}</td>
                <td>{info.email}</td>
                <td>{info.projectName}</td>
                <td>
                  {date.date}, {date.month}, {date.year}
                </td>
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
