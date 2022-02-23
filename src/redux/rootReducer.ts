import { combineReducers } from "redux";
import { creativesReducer } from "redux/creatives/reducer";
import { logsReducer } from "redux/logs/reducer";
import { productsReducer } from "redux/products/reducer";
import { globalReducer } from "redux/global/reducer";
import { campaignsReducer } from "redux/campaigns/reducer";

export const rootReducer = combineReducers({
  globalReducer,
  creativesReducer,
  logsReducer,
  productsReducer,
  campaignsReducer,
});
