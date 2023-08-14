import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import ExcelDownload from "./ExcelDownload";

function InformationInput({ weekDays, getInfo, handleSubmit, info }) {
  const [value, setValue] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("info");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(value));
  }, [value]);
  const handleSubmitBtn = () => {
    localStorage.setItem("info", JSON.stringify(value));
    handleSubmit();
    getInfo(value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <div>
        <TextField
          required
          onChange={(e) => {
            setValue({ ...value, name: e.target.value });
          }}
          value={value.name}
          id="outlined-required"
          label="What's your name?"
          size="small"
        />
        <TextField
          required
          onChange={(e) => {
            setValue({
              ...value,
              email: `${e.target.value}@bristlecone.com`,
            });
          }}
          value={value.email ? value.email.split("@")[0] : value.email}
          placeholder="Email Address"
          id="outlined-required"
          label="What's your email?"
          size="small"
          helperText="@bristlecone.com"
        />
        <TextField
          required
          onChange={(e) => {
            setValue({ ...value, projectName: e.target.value });
          }}
          value={value.projectName}
          id="outlined-required"
          label="What's your project name?"
          size="small"
        />
        <TextField
          required
          onChange={(e) => {
            setValue({ ...value, projectCode: e.target.value });
          }}
          value={value.projectCode}
          id="outlined-required"
          label="What's your project code?"
          size="small"
        />
        <TextField
          required
          onChange={(e) => {
            setValue({ ...value, allowanceAmount: e.target.value });
          }}
          value={value.allowanceAmount}
          id="outlined-required"
          label="What's your Allowance Amount (INR)?"
          size="small"
        />
        <TextField
          onChange={(e) => {
            setValue({ ...value, fromTime: e.target.value });
          }}
          type={"time"}
          id="outlined-input"
          label="From Time"
          size="small"
          value={value.fromTime}
          defaultValue={"02:00"}
          helperText="(02:00 PM default)"
        />
        <TextField
          onChange={(e) => {
            setValue({ ...value, toTime: e.target.value });
          }}
          type={"time"}
          value={value.toTime}
          id="outlined-input"
          label="To Time"
          size="small"
          defaultValue={"11:00"}
          helperText="(11:00 PM default)"
        />
        <TextField
          id="startDate"
          onChange={(e) => {
            setValue({ ...value, startDate: e.target.value });
          }}
          type={"date"}
          value={value.startDate}
          label="Start Date"
          size="small"
          helperText="(Optional, it will take last months 15 to this month 16 by default)"
        />
      </div>
      <Button variant="outlined" onClick={handleSubmitBtn}>
        Click here to submit
      </Button>
      <ExcelDownload
        excelData={weekDays}
        fileName={"shift allowances"}
        info={info}
      />
    </Box>
  );
}

export default InformationInput;
