import { ICreative } from "redux/_global/ICreative";
import {
  restructureCampaignsFromClientToServer,
  restructureCampaignsFromServerToClient,
} from "restructure/campaigns";
import { ISetCreativesData } from "services/creatives/ICreatives";
import { ICreativeService } from "services/_global/ICreativeService";

export const restructureCreativesFromServerToClient = (
  data: ICreativeService[]
): ICreative[] => {
  return data.map((creative: ICreativeService) => ({
    ...creative,
    campaigns: restructureCampaignsFromServerToClient(creative.campaigns),
  }));
};

export const restructureCreativesFromClientToServer = (
  creatives: ICreative[]
): ISetCreativesData[] => {
  const checkedCreatives = creatives.filter((creative) => creative?.checked);
  return checkedCreatives.map((creative) => ({
    campaigns: restructureCampaignsFromClientToServer(
      creative.selectedCampaigns ?? []
    ),
    id: creative.id,
  }));
};
