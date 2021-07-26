import { useState } from "react";
import { DropdownMenu } from "./DropdownMenu";

export const Dropdown = ({ options }) => {
  // set the default item to the first item
  const [selectedItem, setSelectedItem] = useState(options[0]);
  const [isVisible, setIsVisible] = useState(false);

  const onSelect = (index: number) => {
    setSelectedItem(options[index]);
  };

  return (
    <>
      <p>{selectedItem}</p>
      <DropdownMenu options={options} onSelect={onSelect} />
    </>
  );
};
