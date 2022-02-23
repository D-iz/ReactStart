import { PRODUCTS } from "./actionTypes";
import { cloneDeep } from "utils/cloneDeep";
import { IProduct } from "redux/_global/IProduct";
import {
  IProducts,
  IProductsAction,
  productsInitialState,
} from "./initialState";
import { ICreative } from "redux/_global/ICreative";
import { ALL_OPTIONS_SELECT } from "constants/environment";

export const productsReducer = (
  state: IProducts = productsInitialState,
  action: IProductsAction
) => {
  const productId = action.payload?.productId ?? null;
  const products = cloneDeep(state.products);
  const index = products.findIndex((i: IProduct) => i.id === productId);
  switch (action.type) {
    case PRODUCTS.GET_SUCCESS:
      return { ...state, products: action.payload ?? [] };
    case PRODUCTS.GET_FAILED:
      return productsInitialState;
    case PRODUCTS.GET_CREATIVES_SUCCESS:
      const { creatives } = action.payload;
      products[index].creatives = creatives;
      return { ...state, products };
    case PRODUCTS.GET_CAMPAIGNS_SUCCESS:
      const { campaigns } = action.payload;
      const selectedCampaigns = [...[ALL_OPTIONS_SELECT], ...campaigns];
      products[index].campaigns = campaigns;
      const creativesWithSelectedCampaigns = products[index].creatives.flatMap(
        (creative: ICreative) => [
          { ...creative, selectedCampaigns: selectedCampaigns },
        ]
      );
      products[index].creatives = creativesWithSelectedCampaigns;
      return { ...state, products };
    default:
      return state;
  }
};
