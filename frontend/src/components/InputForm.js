import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const InputForm = ({ onSubmit, buttonTitle = "Add" }) => {
  const [input, setInput] = useState({ name: "", phoneNumber: "" });

  return (
    <Form className="mb-4">
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={input.name} onChange={(e) => setInput((old) => ({ ...old, name: e.target.value }))} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          value={input.phoneNumber}
          onChange={(e) => setInput((old) => ({ ...old, phoneNumber: e.target.value }))}
        />
      </Form.Group>
      <Button onClick={() => onSubmit(input)} variant="primary">
        {buttonTitle}
      </Button>
    </Form>
  );
};

export default InputForm;
