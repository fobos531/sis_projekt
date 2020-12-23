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
  const [studentsNoValidation, setStudentsNoValidation] = useState([]);

  useEffect(() => {
    api.get("/student/user_interface/validation/").then(({ data }) => {
      setStudentsValidation(data.data.validation);
      setStudentsNoValidation(data.data.normal);
    });
  }, []);

  const handleSubmit = (mode, values) => {
    api.post(`/student/user_interface/validation/${mode}`, values).then(({ data }) => {
      if (mode === "true") setStudentsValidation((old) => [...old, data]);
      else setStudentsNoValidation((old) => [...old, data]);
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
          <DataTable data={studentsNoValidation} />
        </Column>
        <Column good>
          <InputForm validationSchema={validationSchema} onSubmit={handleSubmit} />
          <DataTable data={studentsValidation} />
        </Column>
      </Row>
    </>
  );
};

export default Validation;
