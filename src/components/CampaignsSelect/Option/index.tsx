import { components } from "react-select";

export const Option: typeof components.Option = (props) => {
  const { label, isSelected } = props;
  return (
    <div>
      <components.Option {...props}>
        <input type="checkbox" checked={isSelected} onChange={() => null} />
        <label> {label}</label>
      </components.Option>
    </div>
  );
};
