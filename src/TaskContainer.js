import React, { useContext, useState } from "react";
// import Task from "./Task";
import { TaskContext } from "./TaskProvider";

const TaskContainer = () => {
  const [issue, setIssue, todoCounter, progressCounter, completeCounter] =
    useContext(TaskContext);
  const [todoCount, setTodoCount] = useState(todoCounter);
  const [progressCount, setProgressCount] = useState(progressCounter);
  const [completeCount, setCompleteCount] = useState(completeCounter);

  const onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };

  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let tasks = issue.filter((task) => {
      if (task.id === id) {
        task.category = cat;
      }
      return task;
    });

    setIssue([...tasks]);
  };

  const deleteTask = (e, id) => {
    let taskCategory = issue.filter((task) => task.id === id);

    switch (taskCategory.category) {
      case "TODO":
        setTodoCount(todoCount - 1);
      case "IN_PROGRESS":
        setProgressCount(progressCount - 1);
      case "COMPLETE":
        setCompleteCount(completeCount - 1);
    }

    let tasks = issue.filter((task) => task.id !== id);
    setIssue([...tasks]);
  };

  return (
    <div className="task-container m-30">
      <div
        className="task-col"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, "TODO");
        }}
      >
        <p className="title">TO DO {todoCount}</p>
        {issue.map((item) => {
          if (item.category === "TODO") {
            return (
              <div
                className="task"
                draggable
                onDragStart={(e) => onDragStart(e, item.id)}
              >
                <div className="task-details">
                  <p>{item?.name}</p>
                  <small
                    className="blue-text"
                    onClick={(e) => deleteTask(e, item.id)}
                  >
                    Delete
                  </small>
                </div>
                <div className="blue-text background-off">Change Status</div>
              </div>
            );
          }
        })}
      </div>
      <div
        className="task-col"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, "IN_PROGRESS");
        }}
      >
        <p className="title">IN PROGRESS {progressCount}</p>
        {issue.map((item) => {
          if (item.category === "IN_PROGRESS") {
            return (
              <div
                className="task"
                draggable
                onDragStart={(e) => onDragStart(e, item.id)}
              >
                <div className="task-details">
                  <p>{item?.name}</p>
                  <small
                    className="blue-text"
                    onClick={(e) => deleteTask(e, item.id)}
                  >
                    Delete
                  </small>
                </div>
                <div className="blue-text background-off">Change Status</div>
              </div>
            );
          }
        })}
      </div>
      <div
        className="task-col"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, "COMPLETE");
        }}
      >
        <p className="title">COMPLETE {completeCount}</p>
        {issue.map((item) => {
          if (item.category === "COMPLETE") {
            return (
              <div
                className="task"
                draggable
                onDragStart={(e) => onDragStart(e, item.id)}
              >
                <div className="task-details">
                  <p>{item?.name}</p>
                  <small
                    className="blue-text"
                    onClick={(e) => deleteTask(e, item.id)}
                  >
                    Delete
                  </small>
                </div>
                <div className="blue-text background-off">Change Status</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TaskContainer;
