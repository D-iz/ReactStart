import { fetchRequestActionsErrors } from "helpers/fetch";
import { call, put } from "redux-saga/effects";
import * as Api from "services/creatives/creatives";
import { CREATIVES } from "redux/creatives/actionTypes";
import {
  IGetCreativesRequest,
  IGetCreativesResponse,
  ISetCreativesRequest,
} from "services/creatives/ICreatives";
import { ICreativeService } from "services/_global/ICreativeService";
import { PRODUCTS } from "redux/products/actionTypes";
import { GLOBAL } from "redux/global/actionTypes";

interface IGetAction {
  type: string;
  payload: IGetCreativesRequest;
}

interface ISetAction {
  type: string;
  payload: ISetCreativesRequest;
}

export function* getCreativesActions(action: IGetAction) {
  const productId = action.payload.productId;
  try {
    yield put({ type: GLOBAL.IS_LOADING, payload: true });
    const creatives: ICreativeService[] = yield call(
      Api.getCreatives,
      action.payload
    );
    const payload: IGetCreativesResponse = { productId, creatives };
    yield put({ type: CREATIVES.GET_SUCCESS, payload: creatives });
    yield put({ type: PRODUCTS.GET_CREATIVES_SUCCESS, payload });
    yield put({ type: GLOBAL.IS_LOADING, payload: false });
  } catch (e) {
    yield fetchRequestActionsErrors(action, e);
    yield put({ type: GLOBAL.IS_LOADING, payload: false });
  }
}

export function* setCreativesActions(action: ISetAction) {
  try {
    yield call(Api.setCreatives, action.payload);
  } catch (e) {
    yield fetchRequestActionsErrors(action, e);
  }
}
