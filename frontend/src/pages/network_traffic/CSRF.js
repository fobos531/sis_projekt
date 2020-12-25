import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

import Column from "../../components/Column";
import DataTable from "../../components/DataTable";
import InputForm from "../../components/InputForm";
import api from "../../utils/api";

const CSRF = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    api.get("/student/network_traffic/csrf/allStudents").then(({ data }) => {
      console.log(data);
      setStudents(data.data);
    });
  }, []);

  const handleEditStudent = ({ name, phoneNumber }) => {
    api.put(`/student/network_traffic/csrf/${phoneNumber}`, { name }).then(({ data }) => {
      setStudents((old) => old.map((student) => (student.phoneNumber === phoneNumber ? { ...student, name } : student)));
    });
  };

  const handleEditStudentProtected = ({ name, phoneNumber }) => {
    api.put(`/student/network_traffic/csrf/protected/${phoneNumber}`, { name }).then(({ data }) => {
      setStudents((old) => old.map((student) => (student.phoneNumber === phoneNumber ? { ...student, name } : student)));
    });
  };

  return (
    <>
      <div className="text-center">
        <h1 className="display-4 my-4">CSRF</h1>
      </div>
      <Row>
        <Column bad>
          <InputForm onSubmit={handleEditStudent} buttonTitle="Edit" />
          <DataTable data={students} />
        </Column>
        <Column good>
          <InputForm onSubmit={handleEditStudentProtected} buttonTitle="Edit" />
          <DataTable data={students} />
        </Column>
      </Row>
    </>
  );
};

export default CSRF;
