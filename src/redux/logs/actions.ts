import { fetchRequestActionsErrors } from "helpers/fetch";
import { call, put } from "redux-saga/effects";
import * as Api from "services/logs/logs";
import { LOGS } from "redux/logs/actionTypes";
import { IGetLogsRequest } from "services/logs/ILogs";
import { ILogService } from "services/_global/ILogService";
import { GLOBAL } from "redux/global/actionTypes";

interface IGetAction {
  type: string;
  payload: IGetLogsRequest;
}

export function* getLogsActions(action: IGetAction) {
  try {
    yield put({ type: GLOBAL.IS_LOADING, payload: true });
    const logs: ILogService[] = yield call(Api.getLogs, action.payload);
    yield put({ type: LOGS.GET_SUCCESS, payload: logs });
    yield put({ type: GLOBAL.IS_LOADING, payload: false });
  } catch (e) {
    yield fetchRequestActionsErrors(action, e);
    yield put({ type: GLOBAL.IS_LOADING, payload: false });
  }
}
