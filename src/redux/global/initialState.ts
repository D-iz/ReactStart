import { IProductId } from "redux/_global/IProduct";

export interface IGlobal {
  isLoading?: boolean;
  currentProductId?: number;
}

interface IGlobalPayload extends IProductId, IGlobal {}

export interface IGlobalAction {
  type: string;
  payload: IGlobalPayload;
}

export const globalInitialState = {
  isLoading: false,
  currentProductId: undefined,
};
