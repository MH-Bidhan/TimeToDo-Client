import React from "react";

const TableHead = ({ columns }) => {
  return (
    <thead className="table-head">
      <tr className="table-row">
        {columns.map(({ label, key }) => {
          return (
            <th key={key || label} className="table-content">
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
