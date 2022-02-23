import { components } from "react-select";
import { ALL_OPTIONS_SELECT } from "constants/environment";

export const MultiValue: typeof components.MultiValue = (props) => {
  const { label, value } = props.data;
  let labelToBeDisplayed = `${label}, `;
  if (value === ALL_OPTIONS_SELECT.value) {
    labelToBeDisplayed = "All is selected";
  }
  return (
    <components.MultiValue {...props}>
      <span>{labelToBeDisplayed}</span>
    </components.MultiValue>
  );
};
