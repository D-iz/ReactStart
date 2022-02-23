import {
  globalInitialState,
  IGlobal,
  IGlobalAction,
} from "redux/global/initialState";
import { GLOBAL } from "redux/global/actionTypes";

export const globalReducer = (
  state: IGlobal = globalInitialState,
  action: IGlobalAction
) => {
  switch (action.type) {
    case GLOBAL.IS_LOADING:
      return { ...state, isLoading: action.payload };
    case GLOBAL.SET_CURRENT_PRODUCT_ID:
      return { ...state, currentProductId: action.payload.productId };
    default:
      return state;
  }
};
