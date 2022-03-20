import React from "react";
import TableHead from "./../table-head/table-head.component";
import "./table.styles.scss";
import TableBody from "./../table-body/table-body.component";

const Table = ({ headContent = [], data = [], columns = [] }) => {
  return (
    <table className="table">
      <TableHead contents={headContent} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
