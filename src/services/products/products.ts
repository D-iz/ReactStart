import { fetchRequestAsync } from "helpers/fetch";
import {
  IGetProductsRequest,
  IGetProductsResponseService,
} from "services/products/IProducts";

enum LABELS {
  GET = "GetProducts",
}

export function getProducts(
  props: IGetProductsRequest
): Promise<IGetProductsResponseService> {
  return fetchRequestAsync({
    options: {
      method: "GET",
    },
    url: "/products",
    label: LABELS.GET,
  });
}
