import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import DataTable from "../../components/DataTable";

import LoginForm from "../../components/LoginForm";
import api from "../../utils/api";

const JWT = () => {
  const [students, setStudents] = useState([]);

  const handleSubmit = (values) => {
    api
      .post("/user/auth/login-jwt", values)
      .then(({ data }) => {
        console.log(data);
        alert("You are logged in and an authentication cookie has been created for you!");
      })
      .catch((error) => {
        console.log(error);
        alert("Wrong credentials!");
      });
  };

  const fetchStudents = () => {
    api
      .get("/student/auth/students-jwt")
      .then(({ data }) => {
        setStudents(data.data);
      })
      .catch((error) => {
        alert("An error occured. Did you log in?");
      });
  };
  return (
    <>
      <div className="text-center">
        <h1 className="display-4 my-4">JSON Web Tokens</h1>
      </div>
      <Row>
        <Col>
          <LoginForm onSubmit={handleSubmit} />
        </Col>
        <Col className="text-center">
          {!students.length ? (
            <Button variant="primary" onClick={fetchStudents}>
              Fetch students
            </Button>
          ) : (
            <DataTable data={students} />
          )}
        </Col>
      </Row>
      <Row></Row>
    </>
  );
};

export default JWT;
