export interface ILog {
  status: string;
  asset_name: string;
  campaign_name: string;
  group_name: string;
}

export interface ILogsAction {
  type: string;
  payload: ILog[];
}

export const logsInitialState = [];
