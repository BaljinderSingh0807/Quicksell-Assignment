import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ByUsers from "./components/ByUsers";
import ByPriority from "./components/ByPriority";
import ByStatus from "./components/ByStatus";

function App() {
  const [selectedItem, setSelectedItem] = useState("Status");

  // Sort A-Z (ascending) based on 'title'
  const sortByTitle = () => {
    setRecords([...records.sort((a, b) => a.title.localeCompare(b.title))]);
  };

  // Sort 4-0 (descending) based on 'priority'
  const sortByPriority = () => {
    setRecords([...records.sort((a, b) => b.priority - a.priority)]);
  };

  const handleItemClick = (item) => {
    if (item === "By Title") {
      sortByTitle();
    } else if (item === "By Priority") {
      sortByPriority();
    } else if (item === "Status") {
      setSelectedItem(item);
    } else if (item === "Users") {
      setSelectedItem(item);
    } else if (item === "Priority") {
      setSelectedItem(item);
    }
  };

  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((data) => setRecords(data.tickets))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header handleItemClick={handleItemClick} />
      {selectedItem === "Status" && <ByStatus records={records} />}
      {selectedItem === "Users" && <ByUsers records={records} />}
      {selectedItem === "Priority" && <ByPriority records={records} />}
    </>
  );
}

export default App;
