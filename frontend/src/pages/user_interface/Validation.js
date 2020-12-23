import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import * as Yup from "yup";

import "yup-phone";
import Column from "../../components/Column";
import DataTable from "../../components/DataTable";
import InputForm from "./components/InputForm";
import api from "../../utils/api";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required!")
    .matches(/^[a-zA-ZćčšžđĆČŠŽĐ ]+$/u, "Please enter a valid name!"),
  phoneNumber: Yup.string().phone(null, false, "Phone number is invalid!"),
});

const Validation = () => {
  const [studentsValidation, setStudentsValidation] = useState([]);

  useEffect(() => {
    api.get("/student/user_interface/validation/").then(({ data }) => {
      setStudentsValidation(data.data.students);
    });
  }, []);

  const handleSubmit = (mode, values) => {
    api.post(`/student/user_interface/validation/${mode}`, values).then(({ data }) => {
      setStudentsValidation((old) => [...old, data]);
    });
  };

  return (
    <>
      <div className="text-center">
        <h1 className="display-4 my-4">Input Validation</h1>
      </div>
      <Row>
        <Column bad>
          <InputForm onSubmit={handleSubmit} />
        </Column>
        <Column good>
          <InputForm validationSchema={validationSchema} onSubmit={handleSubmit} />
        </Column>
      </Row>
      <Row>
        <DataTable data={studentsValidation} />
      </Row>
    </>
  );
};

export default Validation;
