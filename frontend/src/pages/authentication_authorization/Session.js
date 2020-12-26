import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import DataTable from "../../components/DataTable";

import LoginForm from "../../components/LoginForm";
import api from "../../utils/api";

const Session = () => {
  const [students, setStudents] = useState([]);

  const handleSubmit = (values) => {
    api
      .post("/user/auth/login-session", values)
      .then(({ data }) => {
        console.log(data);
        alert("You are logged in and a session ID cookie has been set!");
      })
      .catch((error) => {
        console.log(error);
        alert("Wrong credentials!");
      });
  };

  const fetchStudents = () => {
    api
      .get("/student/auth/students-session")
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
        <h1 className="display-4 my-4">Sessions</h1>
      </div>
      <Row>
        <Col>
          <LoginForm onSubmit={handleSubmit} />
        </Col>
        <Col className="text-center">
          <Button variant="primary" onClick={fetchStudents}>
            Fetch students
          </Button>
          <DataTable data={students} />
        </Col>
      </Row>
      <Row></Row>
    </>
  );
};

export default Session;
