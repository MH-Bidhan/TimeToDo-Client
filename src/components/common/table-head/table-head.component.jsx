import React from "react";

const TableHead = ({ contents }) => {
  return (
    <thead className="table-head">
      <tr className="table-row">
        {contents.map((content) => (
          <th key={content} className="table-content">
            {content}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
