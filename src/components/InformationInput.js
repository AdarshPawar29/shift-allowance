import React, { useState } from "react";

import { Card, Button } from "react-bootstrap";

function InformationInput({ getInfo }) {
  const [value, setValue] = useState({
    name: "",
    email: "",
    projectName: "",
  });
  const handleSubmit = () => {
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
          />
          <br />
          <label>What's your email? </label>{" "}
          <input
            onChange={(e) => {
              setValue({ ...value, email: e.target.value });
            }}
          />
          <label>What's your project name? </label>{" "}
          <input
            onChange={(e) => {
              setValue({ ...value, projectName: e.target.value });
            }}
          />
        </Card.Body>
      </Card>
      <Button variant="outline-primary" className="mt-2" onClick={handleSubmit}>
        Click here to submit
      </Button>
    </div>
  );
}

export default InformationInput;
