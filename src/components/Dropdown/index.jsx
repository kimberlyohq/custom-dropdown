// @flow
import React from "react";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { DropdownMenu } from "./DropdownMenu";
import "./Dropdown.css";

type Placements = "top" | "bottom";
type DropdownProps = {
  options: Array<string>,
  placeholder: string,
  placement: Placements,
};

export const Dropdown = ({
  options,
  placement,
  placeholder,
}: DropdownProps): React$Element<"div"> => {
  // set the default item to the first item
  // TODO: Need to check if options is defined
  const [selectedItem, setSelectedItem] = useState(placeholder);

  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef(null);

  const handleOutsideClick = (event) => {
    event.preventDefault();
    if (isVisible && event.target !== ref.current) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  });

  const onSelect = (index: number) => {
    setIsVisible(false);
    setSelectedItem(options[index]);
  };

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="dropdown">
      <div ref={ref} className="container">
        <div className="header">{selectedItem}</div>
        <FontAwesomeIcon
          onClick={handleToggle}
          icon={isVisible ? faChevronDown : faChevronUp}
          className="button"
        />
      </div>
      {isVisible && (
        <div className={`dropdown-menu-container ${placement}`}>
          <DropdownMenu options={options} onSelect={onSelect} />
        </div>
      )}
    </div>
  );
};
