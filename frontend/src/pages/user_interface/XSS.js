import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

import Column from "../../components/Column";
import DataTableXSS from "./components/DataTableXSS";
import InputForm from "../../components/InputForm";
import api from "../../utils/api";

const XSS = () => {
  const [students, setStudents] = useState([]);

  const handleSubmit = (values) => {
    console.log(values);
    api.post("/student/encryption/plain", values).then(({ data }) => {
      setStudents((old) => [...old, data.student]);
    });
  };

  useEffect(() => {
    api.get("/student/encryption").then(({ data }) => {
      setStudents(data.data.plain);
    });
  }, []);

  return (
    <>
      <div className="text-center">
        <h1 className="display-4 my-4">XSS</h1>
      </div>
      <Row>
        <Column bad width={12}>
          <InputForm onSubmit={handleSubmit} />
          <DataTableXSS data={students} />
        </Column>
      </Row>
    </>
  );
};

export default XSS;
