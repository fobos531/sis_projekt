import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";

const InputForm = ({ onSubmit, validationSchema }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
    },
    validationSchema,
    onSubmit: (values) => onSubmit(validationSchema ? "true" : "false", values),
  });

  return (
    <>
      <Form className="mb-4" onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formik.values.name} onChange={formik.handleChange} isInvalid={formik.errors.name} />
          <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            isInvalid={formik.errors.phoneNumber}
          />
          <Form.Control.Feedback type="invalid">{formik.errors.phoneNumber}</Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="primary">
          Add
        </Button>
      </Form>
    </>
  );
};

export default InputForm;
