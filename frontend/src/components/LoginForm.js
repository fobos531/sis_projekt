import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";

const LoginForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <>
      <Form className="mb-4" onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" value={formik.values.username} onChange={formik.handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
        </Form.Group>
        <Button type="submit" variant="primary">
          Login
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
