import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

import Column from "../../components/Column";
import DataTable from "../../components/DataTable";
import api from "../../utils/api";
import apiStrictCors from "../../utils/apiStrictCors";

const CORS = () => {
  const [studentsPlain, setStudentsPlain] = useState([]);
  const [studentsPlainCors, setStudentsPlainCors] = useState([]);

  useEffect(() => {
    api.get("/student/encryption").then(({ data }) => {
      setStudentsPlain(data.data.plain);
    });
    apiStrictCors.get("/student/encryption").then(({ data }) => {
      setStudentsPlainCors(data.data.plain);
    });
  }, []);

  return (
    <>
      <div className="text-center">
        <h1 className="display-4 my-4">CORS</h1>
      </div>
      <Row>
        <Column bad>
          <DataTable data={studentsPlain} />
        </Column>
        <Column good>
          <DataTable data={studentsPlainCors} />
        </Column>
      </Row>
    </>
  );
};

export default CORS;
