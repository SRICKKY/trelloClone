import React from "react";
import { TaskProvider } from "./TaskProvider";
import TaskContainer from "./TaskContainer";
import SearchBar from "./SearchBar";
import CreateTicket from "./CreateTicket";

const App = () => {
  return (
    <TaskProvider>
      <SearchBar />
      <CreateTicket />
      <TaskContainer />
    </TaskProvider>
  );
};

export default App;
