import React from "react";

const createKey = (item) => {
  const id = item.id || item._id;
  const key = id || Object.values(item)[0] || item.key;
  return key;
};

const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={createKey(item)}>
          {columns.map((column) => {
            const { path, content } = column;
            return (
              <td key={createKey(column)} className="table-content">
                {content ? content(item) : item[path]}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
