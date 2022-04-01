import React from "react";
import configureAndFilterTasks from "../../services/util-functions/tasks/configure-and-filter-tasks";
import DeleteButton from "../common/delete-button/delete-button.component";
import Important from "../common/important/important.component";
import Table from "../common/table/table.component";

const UpcomingTasks = ({ tasks, handleImportant, deleteTask }) => {
  const filterdTasks = configureAndFilterTasks(
    tasks,
    (data) => data.upcoming && !data.isImportant
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
    <div className="important-task-table">
      <div className="task-title">upcoming tasks</div>
      {filterdTasks.length !== 0 ? (
        <Table columns={columns} data={filterdTasks} />
      ) : (
        <span>No tasks found in the current list</span>
      )}
    </div>
  );
};

export default UpcomingTasks;
