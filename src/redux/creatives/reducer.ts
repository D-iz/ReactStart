import { CREATIVES } from "./actionTypes";
import {
  creativesInitialState,
  ICreatives,
  ICreativesAction,
} from "redux/creatives/initialState";
import { cloneDeep } from "utils/cloneDeep";
import { ICreative } from "redux/_global/ICreative";
import { ALL_OPTIONS_SELECT } from "constants/environment";

export const creativesReducer = (
  state: ICreatives = creativesInitialState,
  action: ICreativesAction
) => {
  const creativeId = action.payload?.creativeId ?? null;
  const campaigns = action.payload?.campaigns ?? [];
  const creatives = cloneDeep(state.creatives);
  const indexCreative = state.creatives.findIndex((i) => i.id === creativeId);
  switch (action.type) {
    case CREATIVES.GET_SUCCESS:
      return { ...state, creatives: action.payload ?? [] };
    case CREATIVES.SET_ALL_CHECKBOXES:
      const { checkedAll } = action.payload;
      const checkedCreatives = creatives.map((item: ICreative) => ({
        ...item,
        checked: checkedAll,
      }));
      return { ...state, creatives: checkedCreatives };
    case CREATIVES.SET_CHECKBOX_STATE:
      const { checked } = action.payload;
      creatives[indexCreative].checked = checked;
      return { ...state, creatives };
    case CREATIVES.SET_CAMPAIGNS_SELECTED:
      creatives[indexCreative].selectedCampaigns = campaigns;
      return { ...state, creatives };
    case CREATIVES.SET_ALL_CAMPAIGNS_SELECTED:
      const selectedCampaigns = [...[ALL_OPTIONS_SELECT], ...campaigns];
      const addSelectedCampaigns = creatives.flatMap((creative: ICreative) => [
        { ...creative, selectedCampaigns: selectedCampaigns },
      ]);
      return { ...state, creatives: addSelectedCampaigns };
    case CREATIVES.SET_DEFAULT_STATE:
      return { ...state, creatives: action.payload ?? [] };
    case CREATIVES.CLEAN_STATE:
    case CREATIVES.GET_FAILED:
      return creativesInitialState;
    default:
      return state;
  }
};
