import { LOGS } from "./actionTypes";
import { ILog, ILogsAction, logsInitialState } from "redux/logs/initialState";

export const logsReducer = (
  state: ILog[] = logsInitialState,
  action: ILogsAction
) => {
  switch (action.type) {
    case LOGS.GET_SUCCESS:
      return action.payload ?? [];
    case LOGS.GET_FAILED:
      return logsInitialState;
    default:
      return state;
  }
};
