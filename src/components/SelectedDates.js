import React from "react";
import { Button } from "react-bootstrap";
import ExportExcel from "./ExcelExport";
import { getDayOfWeek, monthNames } from "../utility/findWeekdayDates";
import ExcelDownload from "./ExcelDownload";
function SelectedDates({ weekDays, removeDateFromTable, info }) {
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
                <td>{monthNames[date.month - 1]} allowances</td>
                <td>Daily</td>
                <td>1</td>
                <td>
                  {date.date}/{date.month}/{date.year}
                </td>
                <td>{getDayOfWeek(date.date, date.month, date.year)}</td>
                <td>{info.fromTime}</td>
                <td>{info.toTime}</td>
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
      {/* <ExportExcel
        excelData={weekDays}
        fileName={"shift allowances"}
        info={info}
      /> */}
      <ExcelDownload
        excelData={weekDays}
        fileName={"shift allowances"}
        info={info}
      />
    </div>
  );
}

export default SelectedDates;
