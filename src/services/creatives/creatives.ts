import {
  IGetCreativesRequest,
  ISetCreativesRequest,
} from "services/creatives/ICreatives";
import { fetchRequestAsync } from "helpers/fetch";
import { ICreativeService } from "services/_global/ICreativeService";
import {
  restructureCreativesFromClientToServer,
  restructureCreativesFromServerToClient,
} from "restructure/creatives";

enum LABELS {
  GET = "GetCreatives",
  SET = "SetCreatives",
}

export function getCreatives({
  productId,
}: IGetCreativesRequest): Promise<ICreativeService[]> {
  return fetchRequestAsync({
    options: {
      method: "GET",
    },
    url: `/products/${productId}/assets`,
    label: LABELS.GET,
    reformatData: restructureCreativesFromServerToClient,
  });
}

export function setCreatives({ productId, creatives }: ISetCreativesRequest) {
  return fetchRequestAsync({
    options: {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        assets: restructureCreativesFromClientToServer(creatives),
      }),
    },
    url: `/products/${productId}/assets`,
    label: LABELS.SET,
  });
}
