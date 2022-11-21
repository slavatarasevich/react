import { useState } from "react";
import "./Header.css";

export default function Header(taskValue, setValueInput) {
  const [task, setTask] = useState("");

  function addTask() {
    let newArr = Object.assign([], taskValue);
    newArr.push(task);
    setValueInput(newArr);
    setTask(" ");
  }

  function getValueInput(e) {
    setTask(e.target.value);
  }

  return (
    <div className="header-wrapper">
      <h1>To DO list</h1>
      <div className="wrapper">
        <input
          onChange={getValueInput}
          placeholder="type your task here"
          type="text"
        />
        <button onClick={addTask}>ADD</button>
      </div>
    </div>
  );
}
