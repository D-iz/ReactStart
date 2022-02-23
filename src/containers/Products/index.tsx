import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { IRootReducer } from "redux/IRootReducer";
import { GLOBAL } from "redux/global/actionTypes";
import { IProduct, IProductId } from "redux/_global/IProduct";
import { CREATIVES } from "redux/creatives/actionTypes";
import { IGetCreativesRequest } from "services/creatives/ICreatives";
import { IGetCampaignsRequest } from "services/campaigns/ICampaigns";
import { CAMPAIGNS } from "redux/campaigns/actionTypes";
import { ERoutes } from "constants/routers/routes";
import { SkeletonProducts } from "./SkeletonProducts";
import Card from "components/Card";
import "./style.scss";

const Products = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    globalReducer: { isLoading },
    productsReducer: { products },
  } = useSelector((s: IRootReducer) => s);
  const getCreatives = (payload: IGetCreativesRequest) =>
    dispatch({ type: CREATIVES.GET_REQUEST, payload });
  const getCampaigns = (payload: IGetCampaignsRequest) =>
    dispatch({ type: CAMPAIGNS.GET_REQUEST, payload });
  const setCurrentProductId = (payload: IProductId) =>
    dispatch({ type: GLOBAL.SET_CURRENT_PRODUCT_ID, payload });
  const creativesCleanState = (payload: IProductId) =>
    dispatch({ type: CREATIVES.CLEAN_STATE, payload });
  const campaignsCleanState = (payload: IProductId) =>
    dispatch({ type: CAMPAIGNS.CLEAN_STATE, payload });
  const handlerClickCard = (payload: IProductId) => () => {
    setCurrentProductId(payload);
    creativesCleanState(payload);
    campaignsCleanState(payload);
    getCreatives(payload);
    getCampaigns(payload);
    history.push(ERoutes.CREATIVES_TABLE);
  };
  const createCards = (products: IProduct[]) =>
    products.map((item) => (
      <Card key={item.id} item={item} handlerClickCard={handlerClickCard} />
    ));
  return (
    <div className="Products">
      {isLoading ? (
        <SkeletonProducts />
      ) : products.length ? (
        createCards(products)
      ) : (
        <div>Have not any products</div>
      )}
    </div>
  );
};

export default Products;
