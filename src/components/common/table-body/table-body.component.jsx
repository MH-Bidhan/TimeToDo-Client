import React from "react";
import { useNavigate } from "react-router-dom";

const createKey = (item) => {
  const id = item.id || item._id;
  const key = id || Object.values(item)[0] || item.key;
  return key;
};

const TableBody = ({ data, columns }) => {
  const navigate = useNavigate();
  return (
    <tbody>
      {data.map((item) => (
        <tr key={createKey(item)}>
          {columns.map((column) => {
            const { path, content } = column;
            if (content)
              return (
                <td key={createKey(column)} className="table-content">
                  {content(item)}
                </td>
              );

            return (
              <td
                onClick={() => navigate(`/task/${item["_id"]}`)}
                key={createKey(column)}
                className="table-content"
              >
                {item[path]}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
