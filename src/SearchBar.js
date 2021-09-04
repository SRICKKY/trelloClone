import React, { useState, useContext } from "react";
import { TaskContext } from "./TaskProvider";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [issue, setIssue] = useContext(TaskContext);
  const [dataCopy, setDataCopy] = useState(issue);

  const searchHandler = (e) => {
    setSearchText(e.target.value);

    if (searchText.length > 1) {
      setIssue([...issue.filter((item) => item.name.includes(searchText))]);
    }

    if (searchText.length < 2) {
      console.log("Back to Original", dataCopy);
      setIssue([...dataCopy]);
    }
  };

  return (
    <div className="searchbox m-30">
      <input
        type="text"
        className="searchbox__input"
        onChange={searchHandler}
        value={searchText}
      />
      <box-icon name="search"></box-icon>
    </div>
  );
};

export default SearchBar;
