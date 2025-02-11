import React from "react";
import "./App.css";
import TaskApp from "./components/TaskApp";
import jsonData from "./data/tasks.json";

function App() {
  return (
    <div className="container">
      {/* Code Here */}
      <TaskApp jsonData={jsonData} />
    </div>
  );
}

export default App;
