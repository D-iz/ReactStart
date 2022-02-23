import { fetchRequestAsync } from "helpers/fetch";
import { IGetCampaignsRequest } from "services/campaigns/ICampaigns";
import { restructureCampaignsFromServerToClient } from "restructure/campaigns";
import { ICampaign } from "redux/_global/ICampaign";

enum LABELS {
  GET = "GetCampaigns",
}

export function getCampaigns({
  productId,
}: IGetCampaignsRequest): Promise<ICampaign[]> {
  return fetchRequestAsync({
    options: {
      method: "GET",
    },
    url: `/products/${productId}/campaigns`,
    label: LABELS.GET,
    reformatData: restructureCampaignsFromServerToClient,
  });
}
