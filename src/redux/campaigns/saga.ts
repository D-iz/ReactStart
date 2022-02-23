import { takeEvery } from "redux-saga/effects";
import { CAMPAIGNS } from "./actionTypes";
import { getCampaignActions } from "./actions";

export function* campaignsSaga() {
  yield takeEvery(CAMPAIGNS.GET_REQUEST, getCampaignActions);
}
