import { components } from "react-select";
import { ALL_OPTIONS_SELECT } from "constants/environment";

export const ValueContainer: typeof components.ValueContainer = ({
  children,
  ...props
}) => {
  const currentValues = props.getValue();
  let toBeRendered = children;
  if (currentValues.some((val) => val.value === ALL_OPTIONS_SELECT.value)) {
    if (Array.isArray(children)) {
      const child: React.ReactNode = children[0];
      if (Array.isArray(child)) {
        toBeRendered = [[child[0]], children[1]];
      }
    }
  }
  return (
    <components.ValueContainer {...props}>
      {toBeRendered}
    </components.ValueContainer>
  );
};
