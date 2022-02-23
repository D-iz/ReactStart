import { all } from "redux-saga/effects";
import { creativesSaga } from "redux/creatives/saga";
import { logsSaga } from "redux/logs/saga";
import { productsSaga } from "redux/products/saga";
import { campaignsSaga } from "redux/campaigns/saga";

export default function* rootSaga() {
  yield all([productsSaga(), logsSaga(), creativesSaga(), campaignsSaga()]);
}
