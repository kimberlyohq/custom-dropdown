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
  return (
    <li onClick={onSelect} className="list-item">
      {item}
    </li>
  );
};
