import { useState } from "react";
import { DropdownMenu } from "./DropdownMenu";
import "./Dropdown.css";

export const Dropdown = ({ options }) => {
  // set the default item to the first item
  const [selectedItem, setSelectedItem] = useState(options[0]);
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
        <button onClick={handleToggle}>Toggle</button>
      </div>
      {isVisible && (
        <div className="dropdownMenuContainer">
          <DropdownMenu options={options} onSelect={onSelect} />
        </div>
      )}
    </>
  );
};
