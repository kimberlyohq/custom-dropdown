// @flow
import * as React from "react";
import ReactDOM from "react-dom";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { DropdownMenu } from "./DropdownMenu";
import "./Dropdown.css";
import { MenuItem } from "./MenuItem/index.jsx";

type Placements = "top" | "bottom";
type DropdownProps = {
  options: Array<string>,
  placeholder: string,
  placement: Placements,
  onSelect?: (index: number) => any,
};

export const Dropdown = ({
  options,
  placement = "bottom",
  placeholder = "Select",
  onSelect = (index: number) => {},
}: DropdownProps): React.Portal => {
  const [selectedItem, setSelectedItem] = useState(placeholder);

  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef(null);

  const handleOutsideClick = (event) => {
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

  const handleSelect = (index: number) => {
    setIsVisible(false);
    setSelectedItem(options[index]);
    onSelect(index);
  };

  const handleToggle = (event) => {
    event.stopPropagation();
    setIsVisible(!isVisible);
  };

  return ReactDOM.createPortal(
    <div className="dropdown">
      <div ref={ref} className="container">
        <div className="selected-item">{selectedItem}</div>
        <FontAwesomeIcon
          onClick={handleToggle}
          icon={isVisible ? faChevronDown : faChevronUp}
          className="button"
        />
      </div>
      {isVisible && (
        <div className={`dropdown-menu-container ${placement}`}>
          <DropdownMenu>
            {options.map((option, index) => (
              <MenuItem
                key={index}
                onSelect={() => handleSelect(index)}
                item={option}
              />
            ))}
          </DropdownMenu>
        </div>
      )}
    </div>,
    document.getElementById("dropdown-root")
  );
};
