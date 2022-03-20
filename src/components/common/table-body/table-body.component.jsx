import React from "react";

const createKey = (item) => {
  const id = item.id || item._id;
  const key = id ? id : Object.values(item)[0];
  return key;
};

const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={createKey(item)}>
          {columns.map(({ path }) => (
            <td key={path} className="table-content">
              {item[path]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
