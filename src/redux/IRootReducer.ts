import { IProducts } from "redux/products/initialState";
import { ILog } from "redux/logs/initialState";
import { ICreatives } from "redux/creatives/initialState";
import { IGlobal } from "redux/global/initialState";
import { ICampaigns } from "redux/campaigns/initialState";

export interface IRootReducer
  extends IGlobalReducer,
    IProductsReducer,
    ILogsReducer,
    ICreativesReducer,
    ICampaignsReducer {}

export interface IGlobalReducer {
  globalReducer: IGlobal;
}

export interface IProductsReducer {
  productsReducer: IProducts;
}

export interface ILogsReducer {
  logsReducer: ILog[];
}

export interface ICreativesReducer {
  creativesReducer: ICreatives;
}

export interface ICampaignsReducer {
  campaignsReducer: ICampaigns;
}
