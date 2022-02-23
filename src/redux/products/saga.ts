import { takeEvery } from "redux-saga/effects";
import { getProductsActions } from "./actions";
import { PRODUCTS } from "./actionTypes";

export function* productsSaga() {
  yield takeEvery(PRODUCTS.GET_REQUEST, getProductsActions);
}
