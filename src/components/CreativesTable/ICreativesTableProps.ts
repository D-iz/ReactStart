import { ICreative } from "redux/_global/ICreative";
import { IOption } from "redux/_global/IOption";

export interface ICreativesTableProps {
  creatives: ICreative[];
  allCheckboxState: boolean;
  campaignsOptions: IOption[];

  allCheckboxHandler(): void;
}
