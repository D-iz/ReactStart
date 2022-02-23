import { fetchRequestAsync } from "helpers/fetch";
import { IGetLogsRequest } from "services/logs/ILogs";
import { ILogService } from "services/_global/ILogService";

enum LABELS {
  GET = "GetLogs",
}

export function getLogs({
  productId,
}: IGetLogsRequest): Promise<ILogService[]> {
  return fetchRequestAsync({
    options: {
      method: "GET",
    },
    url: `/products/${productId}/logs`,
    label: LABELS.GET,
  });
}
