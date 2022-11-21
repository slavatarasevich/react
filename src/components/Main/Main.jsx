import "./Main.css";
export default function Main({ taskValue }) {
  return (
    <div className="main-wrapper">
      <div className="tasks">
        {taskValue.map((item) => (
          <span key={Math.random()}>{item}</span>
        ))}
      </div>
    </div>
  );
}
