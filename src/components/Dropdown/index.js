import { useState } from "react";
import { DropdownMenu } from "./DropdownMenu";

export const Dropdown = ({ options }) => {
  // set the default item to the first item
  const [selectedItem, setSelectedItem] = useState(options[0]);
  const [isVisible, setIsVisible] = useState(true);

  const onSelect = (index: number) => {
    setSelectedItem(options[index]);
  };

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <p>{selectedItem}</p>
      <button onClick={handleToggle}>Toggle</button>
      {isVisible && <DropdownMenu options={options} onSelect={onSelect} />}
    </>
  );
};
