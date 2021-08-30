import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Task from "./components/Task";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [tasksTree, setTasksTree] = useState([]);

  // useEffect(() => {
  //   request('/', 'POST')
  //   .then(tasks => setTasks(tasks));
  // }, [
  //   // request
  // ]);

  // useEffect(() => {
  //   setTasksTree(() => convertToTree(tasks));
  // }, [
  //   // tasks
  // ]);

  // const createTask = (index, parentId = null, title) => {
  //   console.log(parentId);
  //   let obj = {
  //     index: index,
  //     parentId: parentId,
  //     title: title,
  //   };
  //   axios.post("/add", obj)
  //   .then(result => setTasks(obj))
  //   // await request("/add", "POST", obj);
  //   // request("/", "POST").then((tasks) => setTasks(tasks));
  // };

  const addTask = ({obj}) => {
    setTasks([tasks, obj]);
  }

  return (
    <div style={{ paddingLeft: "50px" }}>
      <Router>
        <Task tasks={tasks} addTask={addTask} />
      </Router>
    </div>
  );
}

export default App;
