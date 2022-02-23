import { API_ERRORS } from "constants/api/apiErrors";
import { SERVER_URL } from "constants/environment";

export function fetchRequestActionsErrors(action: any, error: any) {
  switch (error.code) {
    case API_ERRORS.InternalServer.code:
      console.error(API_ERRORS.InternalServer, error);
      break;
    case API_ERRORS.BadRequest.code:
      console.error(API_ERRORS.BadRequest, error);
      break;
    default:
      console.log(error);
  }
}

export const fetchRequestAsync = async ({
  options,
  url,
  label,
  reformatData,
}: any) =>
  fetch(SERVER_URL + url, {
    mode: "cors",
    cache: "no-cache",
    method: "POST",
    ...options,
    headers: {
      "x-timeout": 30000,
      ...options.headers,
    },
  })
    .then(async (response) => {
      const data = await response.json();
      switch (true) {
        case response.status > 200:
        case data?.code > 200:
          throw data;
        default:
          console.info(`${label} request success`);
          return reformatData != null ? reformatData(data) : data;
      }
    })
    .catch((error) => {
      console.error(`${label} request failed`);
      throw error;
    });
