import { ICampaignsService } from "services/_global/ICampaignsService";
import { IProductId } from "redux/_global/IProduct";

export interface IGetCampaignsResponse extends IProductId {
  campaigns: ICampaignsService[];
}

export interface IGetCampaignsRequest extends IProductId {}
