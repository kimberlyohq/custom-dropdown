// @flow

import React from "react";

import "./DropdownMenu.css";

type DropdownMenuProps = {
  children?: React$Node,
};

export const DropdownMenu = ({
  children,
}: DropdownMenuProps): React$Element<"ul"> => {
  return <ul>{children}</ul>;
};
