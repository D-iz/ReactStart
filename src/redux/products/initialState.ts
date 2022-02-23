import { IProduct, IProductId } from "redux/_global/IProduct";
import { ICreative } from "redux/_global/ICreative";
import { ICampaign } from "redux/_global/ICampaign";
import { ILog } from "redux/logs/initialState";

export interface IProducts {
  products: IProduct[];
}

export interface IProductPayload extends IProductId, IProducts {
  creatives: ICreative[];
  campaigns: ICampaign[];
  logs: ILog[];
}

export interface IProductsAction {
  type: string;
  payload: IProductPayload;
}

export const productsInitialState = {
  products: [],
};
