import React from "react";
import AddTask from "./Component/AddTask";
import TaskList from "./Component/TaskList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
