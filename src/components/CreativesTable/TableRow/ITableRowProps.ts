import { ICreative } from "redux/_global/ICreative";
import { IOption } from "redux/_global/IOption";

export interface ITableRowProps {
  item: ICreative;
  campaignsOptions: IOption[];
}

export interface ITableRowCheckbox {
  id: string;
  checked: boolean;
}
