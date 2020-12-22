import React, { useState } from "react";
import { Row, Form } from "react-bootstrap";

import DataTable from "../../components/DataTable";
import InputForm from "./components/InputForm";
import Column from "../../components/Column";
import api from "../../utils/api";

const Injection = () => {
  const [studentsUnsafe, setStudentsUnsafe] = useState([]);
  const [studentsSafe, setStudentsSafe] = useState([]);

  const handleSearchUnsafe = (phoneNumber) => {
    api.get(`/student/injection/unsafe?phoneNumber=${phoneNumber}`).then(({ data }) => {
      setStudentsUnsafe(data);
    });
  };

  const handleSearchSafe = (phoneNumber) => {
    api.get(`/student/injection/safe?phoneNumber=${phoneNumber}`).then(({ data }) => {
      setStudentsSafe(data);
    });
  };

  return (
    <>
      <div className="text-center">
        <h1 className="display-4 my-4">SQL Injection</h1>
      </div>
      <Row>
        <Column bad>
          <InputForm onSubmit={handleSearchUnsafe} unsafe />
          <DataTable data={studentsUnsafe} />
        </Column>
        <Column good>
          <InputForm onSubmit={handleSearchSafe} />
          <DataTable data={studentsSafe} />
        </Column>
      </Row>
    </>
  );
};

export default Injection;
