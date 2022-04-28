import React from "react";
import configureAndFilterTasks from "../../services/util-functions/tasks/configure-and-filter-tasks";
import Table from "../common/table/table.component";
import DeleteButton from "./../common/delete-button/delete-button.component";

const ArchivedTasks = ({ tasks, deleteTask }) => {
  const filterdTasks = configureAndFilterTasks(tasks, (data) => data.archived);

  const columns = [
    { path: "name", label: "Task" },
    { path: "date", label: "Date" },
    { path: "time", label: "time" },
    {
      key: "status",

      content: (task) => {
        const badgeColor = task.completed ? "badge-success" : "badge-danger";
        return (
          <span className={`badge ${badgeColor}`}>
            {" "}
            {task.completed ? "Completed" : "Failed"}
          </span>
        );
      },
    },
    {
      key: "delete",
      content: (task) => <DeleteButton handleDelete={() => deleteTask(task)} />,
    },
  ];

  return (
    <div className="archived-task-table">
      <div className="task-title">Archived tasks</div>
      {filterdTasks.length !== 0 ? (
        <Table columns={columns} data={filterdTasks} />
      ) : (
        <span>No tasks found in the current list</span>
      )}
    </div>
  );
};

export default ArchivedTasks;
