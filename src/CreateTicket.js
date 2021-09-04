import React, { useContext, useState } from "react";
import { TaskContext } from "./TaskProvider";
import { v4 as uuidv4 } from "uuid";

const CreateTicket = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const [issue, setIssue] = useContext(TaskContext);

  const selectOption = (e) => {
    setCategory(e.target.value);
  };

  const ticketName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const createTicket = () => {
    if (name.length > 0 && category !== "") {
      setIssue([...issue, { id: uuidv4(), name, category }]);
    }
  };

  return (
    <div className="create-ticket">
      <input
        type="text"
        placeholder="Task Name"
        className="create-tickets__search"
        onChange={ticketName}
      />
      <div className="create-tickets__select">
        <select
          name="ticket_categories"
          id="ticket_categories"
          deafaultValue={category}
          onChange={selectOption}
        >
          <option value="" selected>
            Select Status
          </option>
          <option value="TODO">TODO</option>
          <option value="IN_PROGRESS">IN PROGRESS</option>
          <option value="COMPLETE">COMPLETE</option>
        </select>
      </div>
      <button className="button" onClick={createTicket}>
        Add Task
      </button>
    </div>
  );
};

export default CreateTicket;
