import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { IRootReducer } from "redux/IRootReducer";
import { ILog } from "redux/logs/initialState";
import { LOGS } from "redux/logs/actionTypes";
import { IGetLogsRequest } from "services/logs/ILogs";
import { SkeletonLogs } from "./SkeletonLogs";
import "./style.scss";

const Logs = () => {
  const dispatch = useDispatch();
  const {
    globalReducer: { currentProductId, isLoading },
    logsReducer,
  } = useSelector((s: IRootReducer) => s);
  useEffect(() => {
    const getLogs = (payload: IGetLogsRequest) =>
      dispatch({ type: LOGS.GET_REQUEST, payload });
    if (currentProductId) {
      getLogs({ productId: currentProductId });
    }
  }, [dispatch, currentProductId]);
  const createLogs = (logsReducer: ILog[]) => {
    return logsReducer.map(
      ({ status, campaign_name, asset_name, group_name }: ILog) => (
        <p
          className={classNames("Logs__item", status)}
          key={asset_name + group_name}
        >
          {`${status} - ${campaign_name} - ${asset_name} - ${group_name}`}
        </p>
      )
    );
  };
  return (
    <div className="Logs">
      {isLoading ? (
        <SkeletonLogs />
      ) : !logsReducer?.length ? (
        <div>Have not logs</div>
      ) : (
        createLogs(logsReducer)
      )}
    </div>
  );
};

export default Logs;
