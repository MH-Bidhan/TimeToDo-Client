import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { httpGetTaskById } from "../../hooks/requests";
import "./task-preview.styles.scss";

const TaskPreview = () => {
  const [task, setTask] = useState(null);
  const { id } = useParams();

  const getTask = useCallback(async (id) => {
    const fetchedTask = await httpGetTaskById(id);

    setTask(fetchedTask);
  }, []);

  useEffect(() => {
    getTask(id);
  }, [getTask, id]);

  const date = moment(task?.timeOfTask)
    .format("MMMM Do YYYY, h:mm:ss a")
    .split(",")[0];
  const time = moment(task?.timeOfTask)
    .format("MMMM Do YYYY, h:mm:ss a")
    .split(",")[1]
    .toUpperCase();

  const content = (task) => {
    if (task?.upcoming) {
      return <span className="badge badge-secondary">Upcomming</span>;
    }

    if (task?.archived) {
      return <span className="badge badge-danger">Archived</span>;
    }
    if (task?.marked && task?.completed) {
      return <span className="badge badge-success">Completed</span>;
    }
    if (task?.marked && !task?.completed) {
      return <span className="badge badge-danger">Failed</span>;
    } else {
      return <span className="badge badge-secondary">Unknown</span>;
    }
  };

  return (
    <div className="task-preview">
      <span className="close-button">
        <Link to={"/"}>&#10006;</Link>
      </span>
      <div className="task-preview-heading">Task Detail</div>
      <div className="grid grid-1x2">
        <span className="grid-item">Task Name :</span>
        <span className="grid-item"> {task?.name}</span>
        <span className="grid-item">Task Description :</span>
        <span className="grid-item"> {task?.description}</span>
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
