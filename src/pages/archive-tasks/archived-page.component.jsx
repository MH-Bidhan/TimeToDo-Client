import { css } from "@emotion/react";
import React from "react";
import { ClipLoader } from "react-spinners";
import ArchivedTasks from "./../../components/archived-tasks/archived-tasks.component";
import useTasks from "./../../hooks/useTasks";
import "./archived-page.styles.scss";

const ArchivedPage = () => {
  const { tasks, deleteTask, loading } = useTasks();
  return (
    <section className="archived-tasks">
      {loading ? (
        <Loader size={40} loading={loading} />
      ) : (
        <ArchivedTasks tasks={tasks} deleteTask={deleteTask} />
      )}
    </section>
  );
};

export default ArchivedPage;

const Loader = ({ loading, size, otherProps }) => {
  const override = css`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  return (
    <ClipLoader
      color="#fff"
      loading={loading}
      css={override}
      size={size}
      {...otherProps}
    />
  );
};
