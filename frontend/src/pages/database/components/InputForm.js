import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const InputForm = ({ onSubmit, unsafe }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <Form className="mb-4">
      <Form.Group>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </Form.Group>
      {unsafe && (
        <Form.Group>
          <Form.Label>SQL Query to be executed</Form.Label>
          <Form.Control type="text" value={`SELECT * FROM students WHERE phoneNumber='${phoneNumber}'`} disabled />
        </Form.Group>
      )}
      <Button onClick={() => onSubmit(phoneNumber)} variant="primary">
        Search
      </Button>
    </Form>
  );
};

export default InputForm;
