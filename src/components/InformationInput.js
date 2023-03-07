import React, { useState, useEffect } from "react";

import { Card, Button } from "react-bootstrap";
function InformationInput({ getInfo, handleSubmit }) {
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
    <div className="inputs-submit-btn">
      <Card style={{ width: "40rem" }} className="card border-dark mb-3">
        <h5 class="card-header">Enter Information</h5>
        <Card.Body>
          <label>What's your name? </label>{" "}
          <div class="input-group mb-3">
            <input
              onChange={(e) => {
                setValue({ ...value, name: e.target.value });
              }}
              value={value.name}
              placeholder={"Full Name"}
            />
          </div>
          <label>What's your email? </label>{" "}
          <div class="input-group mb-3">
            <input
              onChange={(e) => {
                setValue({
                  ...value,
                  email: `${e.target.value}@bristlecone.com`,
                });
              }}
              value={value.email ? value.email.split("@")[0] : value.email}
              placeholder="Email Address"
            />
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2">
                @bristlecone.com
              </span>
            </div>
          </div>
          <label>What's your project name? </label>{" "}
          <div class="input-group mb-3">
            <input
              onChange={(e) => {
                setValue({ ...value, projectName: e.target.value });
              }}
              value={value.projectName}
            />
          </div>
          <label>What's your project code? </label>{" "}
          <div class="input-group mb-3">
            <input
              onChange={(e) => {
                setValue({ ...value, projectCode: e.target.value });
              }}
              value={value.projectCode}
            />
          </div>
          <label>What's your Allowance Amount (INR)? </label>{" "}
          <div class="input-group mb-3">
            <input
              onChange={(e) => {
                setValue({ ...value, allowanceAmount: e.target.value });
              }}
              value={value.allowanceAmount}
            />
          </div>
          <label>From Time (01:00 PM default) </label>{" "}
          <div class="input-group mb-3">
            <input
              onChange={(e) => {
                setValue({ ...value, fromTime: e.target.value });
              }}
              type={"time"}
              value={value.fromTime}
            />
          </div>
          <label>To Time (10:00 PM default)</label>{" "}
          <div class="input-group mb-3">
            <input
              onChange={(e) => {
                setValue({ ...value, toTime: e.target.value });
              }}
              type={"time"}
              value={value.toTime}
            />
          </div>
          <label>
            Start Date (Optional, it will take last months 16 to this month 15
            by default){" "}
          </label>{" "}
          <div class="input-group mb-3">
            <input
              id="startDate"
              onChange={(e) => {
                setValue({ ...value, startDate: e.target.value });
              }}
              type={"date"}
              value={value.startDate}
            />
          </div>
        </Card.Body>
      </Card>
      <Button
        variant="outline-primary"
        className="mt-2"
        onClick={handleSubmitBtn}
      >
        Generate Data
      </Button>
    </div>
  );
}

export default InformationInput;
