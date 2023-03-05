import React, { useState } from "react";

import { Card, Button } from "react-bootstrap";

function InformationInput({ getInfo, handleSubmit }) {
  const [value, setValue] = useState({
    name: "",
    email: "",
    projectName: "",
    projectCode: "",
    allowanceAmount: "",
    fromTime: "",
    toTime: "",
    startDate: "",
  });
  const handleSubmitBtn = () => {
    handleSubmit();
    getInfo(value);
  };
  return (
    <div className="inputs-submit-btn">
      <Card style={{ width: "40rem" }}>
        <Card.Title>Enter Information</Card.Title>
        <Card.Body>
          <label>What's your name? </label>{" "}
          <input
            onChange={(e) => {
              setValue({ ...value, name: e.target.value });
            }}
            autoComplete="on"
          />
          <br />
          <label>What's your email? </label>{" "}
          <input
            onChange={(e) => {
              setValue({ ...value, email: e.target.value });
            }}
            autoComplete="on"
          />
          <br />
          <label>What's your project name? </label>{" "}
          <input
            onChange={(e) => {
              setValue({ ...value, projectName: e.target.value });
            }}
            autoComplete="on"
          />
          <br />
          <label>What's your project code? </label>{" "}
          <input
            onChange={(e) => {
              setValue({ ...value, projectCode: e.target.value });
            }}
            autoComplete="on"
          />
          <br />
          <label>What's your Allowance Amount (INR)? </label>{" "}
          <input
            onChange={(e) => {
              setValue({ ...value, allowanceAmount: e.target.value });
            }}
            autoComplete="on"
          />
          <br />
          <label>From Time </label>{" "}
          <input
            onChange={(e) => {
              setValue({ ...value, fromTime: e.target.value });
            }}
            autoComplete="on"
            type={"time"}
          />
          <br />
          <label>To Time </label>{" "}
          <input
            onChange={(e) => {
              setValue({ ...value, toTime: e.target.value });
            }}
            autoComplete="on"
            type={"time"}
          />
          <label>
            Start Date (Optional, it will take last months 15 to this month 16
            by default){" "}
          </label>{" "}
          <input
            id="startDate"
            onChange={(e) => {
              setValue({ ...value, startDate: e.target.value });
            }}
            autoComplete="on"
            type={"date"}
          />
        </Card.Body>
      </Card>
      <Button
        variant="outline-primary"
        className="mt-2"
        onClick={handleSubmitBtn}
      >
        Click here to submit
      </Button>
    </div>
  );
}

export default InformationInput;
