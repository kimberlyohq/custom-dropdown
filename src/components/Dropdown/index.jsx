// @flow
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import {DropdownMenu} from "./DropdownMenu"
import "./Dropdown.css";

type DropdownProps = {
  options: Array<string>,
  placement: "top" | "bottom",
};

export const Dropdown = ({
  options,
  placement,
}: DropdownProps): React$Element<React$FragmentType> => {
  // set the default item to the first item
  // TODO: Need to check if options is defined
  const [selectedItem, setSelectedItem] = useState(options[0]);

  // TODO: set default isVisible to false
  const [isVisible, setIsVisible] = useState(true);

  const onSelect = (index: number) => {
    setIsVisible(false);
    setSelectedItem(options[index]);
  };

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="container">
        <div className="header">{selectedItem}</div>
        <FontAwesomeIcon
          onClick={handleToggle}
          icon={isVisible ? faChevronDown : faChevronUp}
          className="button"
        />
      </div>
      {isVisible && (
        <div className="dropdown-menu-container">
          <DropdownMenu options={options} onSelect={onSelect} />
        </div>
      )}
    </>
  );
};
