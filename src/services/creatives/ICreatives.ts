import { ICreativeService } from "services/_global/ICreativeService";
import { IProductId } from "redux/_global/IProduct";
import { ICreative } from "redux/_global/ICreative";
import { ICampaignsService } from "services/_global/ICampaignsService";

export interface IGetCreativesResponse extends IProductId {
  creatives: ICreativeService[];
}

export interface IGetCreativesRequest extends IProductId {}

export interface ISetCreativesRequest extends IProductId {
  creatives: ICreative[];
}

export interface ISetCreativesData {
  id: number;
  campaigns: ICampaignsService[];
}
