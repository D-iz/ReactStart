import React from "react";
import ReactSelect, { ActionMeta, SingleValue, MultiValue } from "react-select";
import { ISelectCheckboxesProps } from "components/SelectCheckboxes/ISelectCheckboxesProps";
import { IOption } from "redux/_global/IOption";

const SelectCheckboxes = (props: ISelectCheckboxesProps) => {
  const { allOption, options, allowSelectAll, onChange } = props;
  const changeHandler = (
    selected: SingleValue<IOption> | MultiValue<IOption>,
    event: ActionMeta<IOption>
  ) => {
    if (selected !== null && Array.isArray(selected)) {
      if (selected.length > 0) {
        if (selected[selected.length - 1].value === allOption.value) {
          return onChange([allOption, ...options]);
        }
        let result: IOption[] = [];
        if (selected.length === options.length) {
          if (selected.includes(allOption)) {
            result = selected.filter(
              (option: IOption) => option.value !== allOption.value
            );
          } else if (event.action === "select-option") {
            result = [allOption, ...options];
          }
          return onChange(result);
        }
      }
      return onChange(selected);
    }
  };
  if (allowSelectAll) {
    return (
      <ReactSelect
        {...props}
        options={[allOption, ...options]}
        onChange={changeHandler}
      />
    );
  }
  return <ReactSelect {...props} />;
};

export default SelectCheckboxes;
