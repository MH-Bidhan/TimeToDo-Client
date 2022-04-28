import moment from "moment";
import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import "./task-preview.styles.scss";

const TaskPreview = () => {
  const { taskToPreview: task } = useContext(GlobalContext);
  const {
    upcoming,
    archived,
    marked,
    completed,
    timeOfTask,
    name,
    description,
  } = task;

  const date = moment(timeOfTask)
    .format("MMMM Do YYYY, h:mm:ss a")
    .split(",")[0];
  const time = moment(timeOfTask)
    .format("MMMM Do YYYY, h:mm:ss a")
    .split(",")[1]
    .toUpperCase();

  const content = () => {
    if (upcoming) {
      return <span className="badge badge-secondary">Upcomming</span>;
    }

    if (archived) {
      return <span className="badge badge-danger">Archived</span>;
    }
    if (marked && completed) {
      return <span className="badge badge-success">Completed</span>;
    }
    if (marked && !completed) {
      return <span className="badge badge-danger">Failed</span>;
    } else {
      return <span className="badge badge-secondary">Unknown</span>;
    }
  };

  return (
    <div className="task-preview">
      <div className="task-preview-heading">Task Detail</div>
      <div className="grid grid-1x2">
        <span className="grid-item">Task Name :</span>
        <span className="grid-item"> {name}</span>
        <span className="grid-item">Task Description :</span>
        <span className="grid-item"> {description}</span>
        <span className="grid-item">Date :</span>
        <span className="grid-item"> {date}</span>
        <span className="grid-item">Time : </span>
        <span className="grid-item"> {time}</span>
        <span className="grid-item">Status: </span>
        <span className="grid-item">{content(task)}</span>
      </div>
    </div>
  );
};

export default TaskPreview;
