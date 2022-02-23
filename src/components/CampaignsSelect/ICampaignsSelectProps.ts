import { IOption } from "redux/_global/IOption";
import { ICampaign } from "redux/_global/ICampaign";

export interface ICampaignsSelectProps {
  options: IOption[];
  selected: ICampaign[];

  campaignsHandler(props: IOption[]): void;
}
