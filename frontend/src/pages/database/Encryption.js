import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import Column from "../../components/Column";
import DataTable from "./components/DataTable";
import InputForm from "./components/InputForm";
import api from "../../utils/api";

const Encryption = () => {
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
    <>
      <div className="text-center">
        <h1 class="display-4 my-4">Encryption</h1>
      </div>
      <Row>
        <Column bad>
          <InputForm onSubmit={handleAddStudent} />
          <DataTable data={studentsPlain} />
        </Column>
        <Column good>
          <InputForm onSubmit={handleAddStudentEncrypted} />
          <DataTable data={studentsEncrypted} />
        </Column>
      </Row>
    </>
  );
};

export default Encryption;
