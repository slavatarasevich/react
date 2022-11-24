import "./Main.css";
import Item from "../Item/Item";
import { v4 as uuidv4 } from "uuid";

export default function Main({ data, setData }) {
  function delPost(id) {
    let newArr = Object.assign([], data);
    const newFilterData = newArr.filter((item) => item.id !== id);
    setData(newFilterData);
  }

  return (
    <div className="main-wrapper">
      <div className="tasks">
        <ol>
          {data.map((object) => (
            <Item key={uuidv4()} object={object} delPost={delPost} />
          ))}
        </ol>
      </div>
    </div>
  );
}
