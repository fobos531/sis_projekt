import React, { useState } from "react";
import { Row, Col, Table } from "react-bootstrap";

import DataTable from "./components/DataTable";
import InputForm from "./components/InputForm";
import api from "../../utils/api";

const Injection = () => {
  const [studentsPlain, setStudentsPlain] = useState([]);
  const [studentsEncrypted, setStudentsEncrypted] = useState([]);

  const handleAddStudent = (data) => {
    api.post("/student/plain", data);
  };

  return (
    <Row>
      <Col lg="6" xl="6" md="6">
        <InputForm />
        <DataTable data={studentsPlain} />
      </Col>
      <Col lg="6" xl="6" md="6">
        <InputForm />
        <DataTable data={studentsEncrypted} />
      </Col>
    </Row>
  );
};

export default Injection;
