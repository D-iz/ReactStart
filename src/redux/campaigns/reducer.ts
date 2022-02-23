import { ICampaignAction, ICampaigns } from "./initialState";
import { CAMPAIGNS } from "./actionTypes";
import { campaignInitialState } from "./initialState";

export const campaignsReducer = (
  state: ICampaigns = campaignInitialState,
  action: ICampaignAction
) => {
  switch (action.type) {
    case CAMPAIGNS.GET_SUCCESS:
      return { ...state, campaigns: action.payload ?? [] };
    case CAMPAIGNS.CLEAN_STATE:
    case CAMPAIGNS.GET_FAILED:
      return campaignInitialState;
    default:
      return state;
  }
};
