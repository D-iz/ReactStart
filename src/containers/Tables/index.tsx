import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { cloneDeep } from "utils/cloneDeep";
import CreativesTable from "components/CreativesTable";
import Button from "components/Button";
import { EButtonColor } from "components/Button/IButtonProps";
import { ERoutes } from "constants/routers/routes";
import { IRootReducer } from "redux/IRootReducer";
import { CREATIVES } from "redux/creatives/actionTypes";
import { IProduct } from "redux/_global/IProduct";
import { ICreatives, ICreativesSet } from "redux/creatives/initialState";
import { SkeletonTable } from "./SkeletonTable";
import "./style.scss";

const Tables = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    globalReducer: { currentProductId, isLoading },
    creativesReducer: { creatives },
    campaignsReducer: { campaigns },
    productsReducer: { products },
  } = useSelector((s: IRootReducer) => s);
  const isAllCreativesChecked = !creatives.some((i) => !i.checked);
  const setRequestCreatives = (payload: ICreativesSet) =>
    dispatch({ type: CREATIVES.SET_REQUEST, payload });
  const setDefaultStateCreatives = (payload: ICreatives) =>
    dispatch({ type: CREATIVES.SET_DEFAULT_STATE, payload });
  const setAllCheckboxesToCreatives = () =>
    dispatch({
      type: CREATIVES.SET_ALL_CHECKBOXES,
      payload: { checkedAll: !isAllCreativesChecked },
    });
  const handlerClick = () => {
    if (!currentProductId) return;
    const payloadCreatives: ICreativesSet = {
      productId: currentProductId,
      creatives,
    };
    setRequestCreatives(payloadCreatives);
    history.push(ERoutes.LOGS);
  };
  const handlerClean = () => {
    const newProducts = cloneDeep(products);
    const index = newProducts.findIndex(
      (i: IProduct) => i.id === currentProductId
    );
    const defaultCreatives = newProducts[index].creatives ?? [];
    setDefaultStateCreatives(defaultCreatives);
  };
  const createTable = () => (
    <div>
      <CreativesTable
        creatives={creatives}
        allCheckboxState={isAllCreativesChecked}
        allCheckboxHandler={setAllCheckboxesToCreatives}
        campaignsOptions={campaigns ?? []}
      />
      <div className="Table__footer">
        <Button colour={EButtonColor.green} onClick={handlerClick}>
          Upload videos to selected campaigns
        </Button>
        <Button colour={EButtonColor.orange} onClick={handlerClean}>
          Clean
        </Button>
      </div>
    </div>
  );
  return (
    <div className="Table">
      {isLoading ? (
        <SkeletonTable />
      ) : creatives?.length ? (
        createTable()
      ) : (
        <div>Have not any creatives</div>
      )}
    </div>
  );
};

export default Tables;
