import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";
import { getDayOfWeek, monthNames } from "../utility/findWeekdayDates";

const ExportExcel = ({ excelData, fileName, info }) => {
  //create json for excel
  const resultJson = () => {
    const finalJson = [];
    excelData.forEach((element) => {
      finalJson.push({
        "Employee Email": info.email,
        "Employee Name": info.name,
        "Project Code": info.projectCode,
        "Project Name": info.projectName,
        "Allowance Type": "Shift Allowance",
        "Tmp for notes (validation)": `${
          monthNames[element.month - 1]
        } allowances`,
        Frequency: "Daily",
        "No. of Days": "1",
        "For Date (dd/mm/yyyy)": `${element.date}/${element.month}/${element.year}`,
        Day: `${getDayOfWeek(element.date, element.month, element.year)}`,
        "From Time": "02:00 PM",
        "To Time": "11:00 PM",
        "Allowance Amount (INR)": `${info.allowanceAmount}`,
      });
    });
    return finalJson;
  };
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(resultJson());
    const excelBuffer = XLSX.write(
      {
        Sheets: { data: ws },
        SheetNames: ["data"],
      },
      { bookType: "xlsx", type: "array" }
    );
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };
  return (
    <>
      <button onClick={(e) => exportToExcel()}>Export to Excel</button>
    </>
  );
};

export default ExportExcel;
