import { IOption } from "redux/_global/IOption";

export interface ISelectCheckboxesProps {
  options: IOption[];
  value?: IOption | IOption[];
  isMulti?: boolean;
  onChange: (props: any) => void;
  closeMenuOnSelect?: boolean;
  hideSelectedOptions?: boolean;
  components?: any;
  allowSelectAll?: boolean;
  allOption: IOption;
}
