import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";

const ExportExcel = ({ excelData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(excelData);
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
