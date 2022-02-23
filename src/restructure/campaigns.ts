import { ICampaignsService } from "services/_global/ICampaignsService";
import { ICampaign } from "redux/_global/ICampaign";
import { createOption } from "utils/createOption/createOption";

export const restructureCampaignsFromServerToClient = (
  data: ICampaignsService[]
): ICampaign[] => data.flatMap(({ name, id }) => createOption(name, id));

export const restructureCampaignsFromClientToServer = (
  selectedCampaigns: ICampaign[]
): ICampaignsService[] =>
  selectedCampaigns.flatMap((i) => [{ id: i.value, name: i.label }]);
