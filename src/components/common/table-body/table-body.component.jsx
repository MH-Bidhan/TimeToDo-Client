import React, { useContext } from "react";
import { GlobalContext } from "../../../App";

const createKey = (item) => {
  const id = item.id || item._id;
  const key = id || Object.values(item)[0] || item.key;
  return key;
};

const TableBody = ({ data, columns }) => {
  const { setTaskToPreview } = useContext(GlobalContext);
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
                onClick={() => setTaskToPreview(item)}
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
