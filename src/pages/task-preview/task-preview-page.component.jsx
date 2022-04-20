import React from "react";
import TaskPreview from "../../components/task-preview/task-preview.component";
import "./task-preview-page.styles.scss";

const TaskPreviewPage = () => {
  return (
    <div className="task-preview-page">
      <div className="content">
        <TaskPreview />
      </div>
    </div>
  );
};

export default TaskPreviewPage;
