import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import Column from "../../components/Column";
import DataTable from "../../components/DataTable";
import InputForm from "../../components/InputForm";
import api from "../../utils/api";
import apiHttps from "../../utils/apiHttps";

const EncryptedTraffic = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get("/student/encryption").then(({ data }) => {
      setStudents(data.data.plain);
    });
  }, []);

  const handleAddStudent = (data) => {
    api.post("/student/encryption/plain", data).then(({ data }) => {
      setStudents((old) => [...old, data.student]);
    });
  };

  const handleAddStudentEncrypted = (data) => {
    apiHttps.post("/student/encryption/plain", data).then(({ data }) => {
      setStudents((old) => [...old, data.student]);
    });
  };

  return (
    <>
      <div className="text-center">
        <h1 className="display-4 my-4">Encrypted Traffic</h1>
      </div>
      <Row>
        <Column bad>
          <InputForm onSubmit={handleAddStudent} />
          <DataTable data={students} />
        </Column>
        <Column good>
          <InputForm onSubmit={handleAddStudentEncrypted} />
          <DataTable data={students} />
        </Column>
      </Row>
    </>
  );
};

export default EncryptedTraffic;
