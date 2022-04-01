import React from "react";
import { useNavigate } from "react-router-dom";
import NewTaskForm from "../../components/new-task-form/new-task-form.component";
import useTasks from "../../hooks/useTasks";
import "./new-tasks-page.styles.scss";

const NewTaskPage = () => {
  const { createNewTask } = useTasks();
  const navigate = useNavigate();
  return (
    <div className="new-task-page">
      <div className="content">
        <NewTaskForm createNewTask={createNewTask} navigate={navigate} />
      </div>
    </div>
  );
};

export default NewTaskPage;
