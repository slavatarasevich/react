import "./Task.css";
export default function Task(props) {
  return (
    <div className="new-task">
      <span>{props.text}</span>
      <button className="task-delete">X</button>
    </div>
  );
}
