import { takeEvery } from "redux-saga/effects";
import { LOGS } from "./actionTypes";
import { getLogsActions } from "./actions";

export function* logsSaga() {
  yield takeEvery(LOGS.GET_REQUEST, getLogsActions);
}
