// @flow

import React from "react";

import { MenuItem } from "../MenuItem";
import "./DropdownMenu.css";

type DropdownMenuProps = {
  options: Array<String>,
  onSelect: (index: number) => void,
};

export const DropdownMenu = ({
  options,
  onSelect,
}: DropdownMenuProps): React$Element<"ul"> => {
  return (
    <ul>
      {options.map((option, index) => (
        <MenuItem key={index} onSelect={() => onSelect(index)} item={option} />
      ))}
    </ul>
  );
};
