import { ICreative } from "redux/_global/ICreative";
import { ICampaign } from "redux/_global/ICampaign";

export interface IProduct {
  id: number;
  name: string;
  preview_url: string;
  creatives?: ICreative[];
  campaigns?: ICampaign[];
}

export interface IProductId {
  productId: number;
}
