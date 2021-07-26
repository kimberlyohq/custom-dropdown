export const MenuItem = ({ onSelect, item }) => {

  return <li onClick={onSelect}>{item}</li>;
};
