import { fetchRequestActionsErrors } from "helpers/fetch";
import { call, put } from "redux-saga/effects";
import * as Api from "services/campaigns/campaigns";
import { CAMPAIGNS } from "./actionTypes";
import { IGetCampaignsRequest } from "services/campaigns/ICampaigns";
import { PRODUCTS } from "redux/products/actionTypes";
import { ICampaign } from "redux/_global/ICampaign";
import { ICampaignPayload } from "redux/campaigns/initialState";
import { GLOBAL } from "redux/global/actionTypes";
import { CREATIVES } from "redux/creatives/actionTypes";

interface IGetCampaignsAction {
  type: string;
  payload: IGetCampaignsRequest;
}

export function* getCampaignActions(action: IGetCampaignsAction) {
  const productId = action.payload.productId;
  try {
    yield put({ type: GLOBAL.IS_LOADING, payload: true });
    const campaigns: ICampaign[] = yield call(Api.getCampaigns, action.payload);
    const payload: ICampaignPayload = { productId, campaigns: campaigns };
    yield put({ type: PRODUCTS.GET_CAMPAIGNS_SUCCESS, payload });
    yield put({ type: CAMPAIGNS.GET_SUCCESS, payload: campaigns });
    yield put({
      type: CREATIVES.SET_ALL_CAMPAIGNS_SELECTED,
      payload: { campaigns: campaigns },
    });
    yield put({ type: GLOBAL.IS_LOADING, payload: false });
  } catch (e) {
    yield fetchRequestActionsErrors(action, e);
    yield put({ type: GLOBAL.IS_LOADING, payload: false });
  }
}
