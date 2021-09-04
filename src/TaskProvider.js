import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  // const [todoCount, setTodoCount] = useState();
  // const [progressCount, setProgressCount] = useState();
  // const [completeCount, setCompleteCount] = useState();

  const [issue, setIssue] = useState([
    { id: uuidv4(), name: "Insurance Plan", category: "TODO" },
    { id: uuidv4(), name: "Building Rockets", category: "IN_PROGRESS" },
    { id: uuidv4(), name: "Macbook Air M1", category: "TODO" },
    { id: uuidv4(), name: "Rambo", category: "IN_PROGRESS" },
    { id: uuidv4(), name: "Wassup Dude!", category: "TODO" },
    { id: uuidv4(), name: "Elon Musk", category: "COMPLETE" },
    { id: uuidv4(), name: "Refrigerator", category: "TODO" },
    { id: uuidv4(), name: "Television", category: "COMPLETE" },
    { id: uuidv4(), name: "Fantastic", category: "COMPLETE" },
  ]);

  const todoCounter = issue.filter((item) => item.category === "TODO").length;
  const progressCounter = issue.filter(
    (item) => item.category === "IN_PROGRESS"
  ).length;
  const completeCounter = issue.filter(
    (item) => item.category === "COMPLETE"
  ).length;

  return (
    <TaskContext.Provider
      value={[issue, setIssue, todoCounter, progressCounter, completeCounter]}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
