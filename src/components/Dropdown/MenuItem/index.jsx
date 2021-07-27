// @flow
import React from "react";
import "./MenuItem.css";

type MenuItemProps = {
  onSelect: () => void,
  item: string,
};

export const MenuItem = ({
  onSelect,
  item,
}: MenuItemProps): React$Element<"li"> => {
  const handleClick = (event) => {
    event.stopPropagation();
    onSelect();
  };
  return (
    <li onClick={handleClick} className="list-item">
      {item}
    </li>
  );
};
