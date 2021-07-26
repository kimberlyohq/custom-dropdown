import "./MenuItem.css";
export const MenuItem = ({ onSelect, item }) => {
  return (
    <li onClick={onSelect} className="list-item">
      {item}
    </li>
  );
};
