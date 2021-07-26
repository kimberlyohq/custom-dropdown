import { MenuItem } from "../MenuItem";

export const DropdownMenu = ({ options, onSelect }) => {
  return (
    <ul>
      {options.map((option, index) => (
        <MenuItem key={index} onSelect={() => onSelect(index)} item={option} />
      ))}
    </ul>
  );
};
