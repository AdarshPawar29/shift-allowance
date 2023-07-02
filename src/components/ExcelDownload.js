import React from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { getDayOfWeek, monthNames } from "../utility/findWeekdayDates";

const ExcelDownload = ({ excelData, fileName, info }) => {
  const workbook = new ExcelJS.Workbook();
  function exportToExcel() {
    const headers = [
      "Employee Email",
      "Employee Name",
      "Project Code",
      "Project Name",
      "Allowance Type",
      "Tmp for notes (validation)",
      "Frequency",
      "No. of Days	",
      "For Date (dd/mm/yyyy)",
      "Day",
      "From Time",
      "To Time",
      "Allowance Amount (INR)",
    ];
    const sheet = workbook.addWorksheet("My Sheet");

    // Set up your header text
    const headerText = "BconeHr&E2E";

    // Merge cells for the header row
    sheet.mergeCells("A1:M1");

    // Set the header text in the merged cell
    const mergedCell = sheet.getCell("A1");
    mergedCell.value = headerText;

    // Style the merged cell as desired
    mergedCell.font = {
      bold: true,
      size: 12,
      underline: true,
    };
    mergedCell.alignment = {
      horizontal: "center",
      vertical: "middle",
      wrapText: true,
    };
    mergedCell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "dae3f3" },
    };

    //adding headers

    // Set header values
    sheet.addRow(headers);
    // Set row height
    sheet.getRow(2).height = 60;

    // Style the header row
    const headerRow = sheet.getRow(2);
    headerRow.font = {
      bold: true,
    };
    headerRow.alignment = {
      horizontal: "center",
      vertical: "middle",
      wrapText: true,
    };
    headerRow.fill = {
      fgColor: { argb: "e7e6e6" },
    };

    // adding all information

    excelData.forEach((element) => {
      sheet.addRow([
        `${info.email}`,
        `${info.name}`,
        `${info.projectCode}`,
        `${info.projectName}`,
        `Shift Allowance`,
        `${monthNames[element.month - 1]} allowances`,
        `Daily`,
        `${1}`,
        `${element.date}/${element.month}/${element.year}`,
        `${getDayOfWeek(element.date, element.month, element.year)}`,
        `${info.fromTime ? info.fromTime : "02:00"}`,
        `${info.toTime ? info.toTime : "11:00"}`,
        `${info.allowanceAmount}`,
      ]);
    });

    // Adjust column widths to fit content
    sheet.columns.forEach((column) => {
      let maxLength = 0;
      column.eachCell({ includeEmpty: true }, (cell) => {
        const columnWidth = cell.value ? cell.value.toString().length : 10;
        if (columnWidth > maxLength) {
          maxLength = columnWidth;
        }
      });
      column.width = maxLength < 10 ? 10 : maxLength;
    });
    // Style the remaining rows
    const dataRows = sheet.getRows(3, excelData.length + 2);
    dataRows.forEach((row) => {
      row.alignment = {
        horizontal: "center",
        vertical: "middle",
        wrapText: true,
      };
      row.height = 29.25;
    });
    //Save the excel
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(new Blob([buffer]), `${fileName}.xlsx`);
    });
  }
  return (
    <>
      <button onClick={(e) => exportToExcel()}>Export to Excel</button>
    </>
  );
};

export default ExcelDownload;
