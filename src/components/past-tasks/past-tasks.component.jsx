import React from "react";
import configureAndFilterTasks from "../../services/util-functions/tasks/configure-and-filter-tasks";
import DeleteButton from "../common/delete-button/delete-button.component";
import Important from "../common/important/important.component";
import Table from "../common/table/table.component";

const PastTasks = ({ tasks, deleteTask }) => {
  const filterdTasks = configureAndFilterTasks(
    tasks,
    (data) => !data.upcoming && data.marked
  );

  const columns = [
    {
      key: "important",
      content: (task) => (
        <Important
          onClick={() =>
            alert(
              "Can not update any properties of the task that are past their specified time"
            )
          }
          isImportant={task.isImportant}
        />
      ),
    },
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
    <div className="important-task-table">
      {filterdTasks.length !== 0 ? (
        <React.Fragment>
          <div className="task-title">past tasks</div>
          <Table columns={columns} data={filterdTasks} />
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default PastTasks;
