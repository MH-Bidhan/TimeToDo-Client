import { css } from "@emotion/react";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import configureAndFilterTasks from "../../services/util-functions/tasks/configure-and-filter-tasks";
import Table from "../common/table/table.component";

const MarkButton = ({ label, task, markTask, action }) => {
  const [loading, setLoading] = useState(false);

  const classes =
    label === "Complete" ? " btn btn-sm btn-success" : " btn btn-sm btn-danger";

  const override = css`
    display: block;
    margin: 0 1.3rem;
  `;

  return (
    <button
      onClick={() => {
        setLoading(true);

        markTask(task, action);
      }}
      className={classes}
    >
      {loading ? (
        <ClipLoader color="#fff" loading={loading} css={override} size={20} />
      ) : (
        label
      )}
    </button>
  );
};

const UnmarkedTasks = ({ tasks, markTask }) => {
  const filterdTasks = configureAndFilterTasks(
    tasks,
    (data) => !data.upcoming && !data.marked
  );

  const columns = [
    { path: "name", label: "Task" },
    { path: "date", label: "Date" },
    { path: "time", label: "time" },
    {
      key: "Complete",
      content: (task) => (
        <MarkButton
          markTask={markTask}
          task={task}
          label="Complete"
          action={true}
        />
      ),
    },
    {
      key: "delete",
      content: (task) => (
        <MarkButton
          markTask={markTask}
          task={task}
          label={` Failed `}
          action={false}
        />
      ),
    },
  ];

  return (
    <div className="unmarked-tasks-table">
      {filterdTasks.length !== 0 ? (
        <Table columns={columns} data={filterdTasks} />
      ) : null}
    </div>
  );
};

export default UnmarkedTasks;
