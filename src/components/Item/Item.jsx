import "./Item.css";

export default function Item({ object, delPost }) {
  return (
    <li>
      <span>{object.namePost}</span>
      <div
        className="del_btn"
        onClick={() => {
          delPost(object.id);
        }}
      >
        X
      </div>
    </li>
  );
}
