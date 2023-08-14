import React from "react";
import { Button } from "react-bootstrap";
import { getDayOfWeek, monthNames } from "../utility/findWeekdayDates";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function SelectedDates({ weekDays, removeDateFromTable, info }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" size="small" stickyHeader={true}>
        <TableHead>
          <TableRow>
            <TableCell>Employee Email</TableCell>
            <TableCell>Employee Name</TableCell>
            <TableCell>Project Code</TableCell>
            <TableCell>Project Name</TableCell>
            <TableCell>Allowance Type</TableCell>
            <TableCell>Tmp for notes (validation)</TableCell>
            <TableCell>Frequency</TableCell>
            <TableCell>No. of Days</TableCell>
            <TableCell>For Date (dd/mm/yyyy)</TableCell>
            <TableCell>Day</TableCell>
            <TableCell>From Time</TableCell>
            <TableCell>To Time</TableCell>
            <TableCell>Allowance Amount (INR)</TableCell>
            <TableCell>Remove Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weekDays &&
            weekDays.map((date) => (
              <TableRow key={date.date}>
                <TableCell>{info.email}</TableCell>
                <TableCell>{info.name}</TableCell>
                <TableCell>{info.projectCode}</TableCell>
                <TableCell>{info.projectName}</TableCell>
                <TableCell>Shift Allowance</TableCell>
                <TableCell>{monthNames[date.month - 1]} allowances</TableCell>
                <TableCell>Daily</TableCell>
                <TableCell>1</TableCell>
                <TableCell>
                  {date.date}/{date.month}/{date.year}
                </TableCell>
                <TableCell>
                  {getDayOfWeek(date.date, date.month, date.year)}
                </TableCell>
                <TableCell>{info.fromTime}</TableCell>
                <TableCell>{info.toTime}</TableCell>
                <TableCell>{info.allowanceAmount}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => removeDateFromTable(date.date)}
                    variant="outline-danger"
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SelectedDates;
