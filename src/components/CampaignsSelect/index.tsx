import React from "react";
import makeAnimated from "react-select/animated";
import { IOption } from "redux/_global/IOption";
import SelectCheckboxes from "components/SelectCheckboxes";
import { ALL_OPTIONS_SELECT } from "constants/environment";
import { ICampaignsSelectProps } from "./ICampaignsSelectProps";
import { ValueContainer } from "./ValueContainer";
import { MultiValue } from "./MultiValue";
import { Option } from "./Option";

const CampaignsSelect = ({
  options,
  campaignsHandler,
  selected,
}: ICampaignsSelectProps) => {
  const animatedComponents = makeAnimated();
  const handleChange = (selected: IOption[]) => {
    campaignsHandler(selected);
  };
  return (
    <span
      className="d-inline-block"
      data-toggle="popover"
      data-trigger="focus"
      data-content="Please selecet account(s)"
    >
      <SelectCheckboxes
        options={options}
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        components={{
          Option,
          MultiValue,
          ValueContainer,
          animatedComponents,
        }}
        onChange={handleChange}
        allowSelectAll={true}
        value={selected}
        allOption={ALL_OPTIONS_SELECT}
      />
    </span>
  );
};

export default CampaignsSelect;
