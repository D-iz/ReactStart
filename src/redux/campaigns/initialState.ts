import { ICampaign } from "redux/_global/ICampaign";
import { IProductId } from "redux/_global/IProduct";

export interface ICampaigns {
  campaigns: ICampaign[];
}

export interface ICampaignPayload extends IProductId, ICampaigns {}

export interface ICampaignAction {
  type: string;
  payload: ICampaignPayload;
}

export const campaignInitialState = {
  campaigns: [],
};
