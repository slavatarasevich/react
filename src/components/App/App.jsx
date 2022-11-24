import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [data, setData] = useState([]);
  const [render, setRender] = useState(true);

  function showScreen() {
    setRender(false);
  }

  if (render) {
    return (
      <div>
        <h1>
          Это страница приветствия, чтобы выйти отсюда - нажми на кнопку "Выйти"
        </h1>
        <button onClick={showScreen}>Выйти</button>
      </div>
    );
  }
  return (
    <div className="App-wrapper">
      <div className="App">
        <Header setData={setData} data={data} />
        <Main data={data} setData={setData} />
        <img src="assets/picture.jpeg" alt="" />
      </div>
    </div>
  );
}
