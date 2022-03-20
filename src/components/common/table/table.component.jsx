import React from "react";
import TableBody from "./../table-body/table-body.component";
import TableHead from "./../table-head/table-head.component";
import "./table.styles.scss";

const Table = ({ data = [], columns = [] }) => {
  return (
    <table className="table">
      <TableHead columns={columns} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
