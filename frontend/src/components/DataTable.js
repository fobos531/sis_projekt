import React from "react";
import { Table } from "react-bootstrap";

const DataTable = ({ data }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row._id}>
            <td>{row.name}</td>
            <td>{row.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
