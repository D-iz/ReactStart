import { ICreative } from "redux/_global/ICreative";
import { ICampaign } from "redux/_global/ICampaign";
import { IProductId } from "redux/_global/IProduct";

export interface ICreativesSet extends IProductId {
  creatives: ICreative[];
}

export interface ICreativeCheckPayload {
  creativeId: number;
  checked: boolean;
}

export interface ICreativesCheckAllPayload {
  checkedAll: boolean;
}

export interface ICreativeCampaignsPayload {
  creativeId: number;
  campaigns: ICampaign[];
}

interface ICreativesPayload
  extends ICreativeCheckPayload,
    ICreativesCheckAllPayload,
    ICreativeCampaignsPayload {}

export interface ICreativesAction {
  type: string;
  payload: ICreativesPayload;
}

export interface ICreatives {
  creatives: ICreative[];
}

export const creativesInitialState = {
  creatives: [],
};
