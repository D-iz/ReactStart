import { ICampaign } from "redux/_global/ICampaign";

export interface ICreative {
  id: number;
  name: string;
  g_drive_path: string;
  preview_url: string;
  url: string;
  campaigns: ICampaign[];
  checked?: boolean;
  selectedCampaigns?: ICampaign[];
}
