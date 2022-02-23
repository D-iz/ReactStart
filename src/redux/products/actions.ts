import { fetchRequestActionsErrors } from "helpers/fetch";
import { call, put } from "redux-saga/effects";
import * as Api from "services/products/products";
import { PRODUCTS } from "redux/products/actionTypes";
import {
  IGetProductsRequest,
  IGetProductsResponseService,
} from "services/products/IProducts";
import { GLOBAL } from "redux/global/actionTypes";

interface IGetAction {
  type: string;
  payload: IGetProductsRequest;
}

export function* getProductsActions(action: IGetAction) {
  try {
    yield put({ type: GLOBAL.IS_LOADING, payload: true });
    const products: IGetProductsResponseService = yield call(
      Api.getProducts,
      action.payload
    );
    yield put({ type: PRODUCTS.GET_SUCCESS, payload: products });
    yield put({ type: GLOBAL.IS_LOADING, payload: false });
  } catch (e) {
    yield fetchRequestActionsErrors(action, e);
    yield put({ type: GLOBAL.IS_LOADING, payload: false });
  }
}
