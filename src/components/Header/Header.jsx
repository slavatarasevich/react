import { useState } from "react";
import "./Header.css";
import { v4 as uuidv4 } from "uuid";

export default function Header({ data, setData }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function addTask() {
    let newArr = Object.assign([], data);
    if (value) {
      newArr.push({
        id: uuidv4(),
        namePost: value,
      });
      setData(newArr);
    }
    setValue(" ");
  }
  return (
    <div className="header-wrapper">
      <h1>To DO list</h1>
      <div className="wrapper">
        <input
          onChange={handleChange}
          placeholder="type your task here"
          type="text"
        />
        <button onClick={addTask}>ADD</button>
      </div>
    </div>
  );
}
