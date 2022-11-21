import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { useState } from "react";

export default function App() {
  const [taskValue, setValueInput] = useState([]);

  return (
    <div className="App-wrapper">
      <div className="App">
        <Header setValueInput={setValueInput} taskValue={taskValue} />
        <Main taskValue={taskValue} />
      </div>
    </div>
  );
}
