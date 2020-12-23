import React from "react";
import { Table } from "react-bootstrap";
import InnerHTML from "dangerously-set-html-content";
const DataTableXSS = ({ data }) => {
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
          <tr key={row._id || row.id}>
            <td>
              <InnerHTML html={row.name} />
            </td>

            <td>
              <InnerHTML html={row.phoneNumber} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTableXSS;
