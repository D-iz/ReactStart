import { ICampaignsService } from "services/_global/ICampaignsService";

export interface ICreativeService {
  id: number;
  name: string;
  g_drive_path: string;
  preview_url: string;
  url: string;
  campaigns: ICampaignsService[];
  checked?: boolean;
}

export interface ICreativeSendServiceData {
  id: number;
  campaigns: ICampaignsService[];
}
