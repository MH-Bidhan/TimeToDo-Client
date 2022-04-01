import React from "react";
import configureAndFilterTasks from "../../services/util-functions/tasks/configure-and-filter-tasks";
import DeleteButton from "../common/delete-button/delete-button.component";
import Important from "../common/important/important.component";
import Table from "../common/table/table.component";

const ImportantTasks = ({ tasks, handleImportant, deleteTask }) => {
  const filterdTasks = configureAndFilterTasks(
    tasks,
    (data) => data.upcoming && data.isImportant
  );

  const columns = [
    {
      key: "important",
      content: (task) => (
        <Important
          handleImportant={() => handleImportant(task)}
          isImportant={task.isImportant}
        />
      ),
    },
    { path: "name", label: "Task" },
    { path: "date", label: "Date" },
    { path: "time", label: "time" },
    {
      key: "delete",
      content: (task) => <DeleteButton handleDelete={() => deleteTask(task)} />,
    },
  ];

  return (
    <div className="upcoming-task-table">
      {filterdTasks.length !== 0 ? (
        <React.Fragment>
          <div className="task-title">Important tasks</div>
          <Table columns={columns} data={filterdTasks} />
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default ImportantTasks;
