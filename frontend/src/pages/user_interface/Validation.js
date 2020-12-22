import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import DataTable from "../../components/DataTable";
import InputForm from "../../components/InputForm";
import api from "../../utils/api";

const Validation = () => {
  const [studentsPlain, setStudentsPlain] = useState([]);
  const [studentsEncrypted, setStudentsEncrypted] = useState([]);

  useEffect(() => {
    api.get("/student").then(({ data }) => {
      setStudentsPlain(data.data.plain);
      setStudentsEncrypted(data.data.encrypted);
    });
  }, []);

  const handleAddStudent = (data) => {
    api.post("/student/plain", data).then(({ data }) => {
      setStudentsPlain((old) => [...old, data.student]);
    });
  };

  const handleAddStudentEncrypted = (data) => {
    api.post("/student/encrypted", data).then(({ data }) => {
      setStudentsEncrypted((old) => [...old, data.student]);
    });
  };

  return (
    <Row>
      <Col lg="6" xl="6" md="6">
        <InputForm onSubmit={handleAddStudent} />
        <DataTable data={studentsPlain} />
      </Col>
      <Col lg="6" xl="6" md="6">
        <InputForm onSubmit={handleAddStudentEncrypted} />
        <DataTable data={studentsEncrypted} />
      </Col>
    </Row>
  );
};

export default Validation;
