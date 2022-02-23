import { ILogService } from "services/_global/ILogService";
import { IProductId } from "redux/_global/IProduct";

export interface IGetLogsResponse extends IProductId {
  logs: ILogService[];
}

export interface IGetLogsRequest extends IProductId {}
