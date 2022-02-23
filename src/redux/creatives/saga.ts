import { takeEvery } from "redux-saga/effects";
import { CREATIVES } from "./actionTypes";
import {
  getCreativesActions,
  setCreativesActions,
} from "redux/creatives/actions";

export function* creativesSaga() {
  yield takeEvery(CREATIVES.GET_REQUEST, getCreativesActions);

  yield takeEvery(CREATIVES.SET_REQUEST, setCreativesActions);
}
