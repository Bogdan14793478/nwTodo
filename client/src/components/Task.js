import axios from "axios";
import React, { useState } from "react";

function Task({ tasks, createTask, id = null, addTask }) {
  const [task, setTask] = useState("");
  const [getIndex, setIndex] = useState(0);

  const inputChange = (e) => {
    setTask(e.target.value);
  };

  const clickCreateTask = async () => {
    let obj = {
      // index: index,
      // parentId: parentId,
      task,
    };
    axios.post("http://localhost:5000/api/add", obj, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
    console.log(obj);
  };

  // const clickCreateTask = () => {
  //   if (task !== "") {
  //     if (!!id) {
  //       createTask({task: task,  parentId: id, index: tasks.length });
  //     } else {
  //       createTask({task: task,  parentId: id, index: getIndex });
  //       setIndex((index) => index + 1);
  //     }
  //     setTask("");
  //   }
  // };

  return (
    <div>
      <ul>
        <li>
          <input
            type="text"
            className="task-name"
            value={task}
            onChange={inputChange}
          />
          <button type="button" className="btn" onClick={clickCreateTask}>
            Save
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Task;
