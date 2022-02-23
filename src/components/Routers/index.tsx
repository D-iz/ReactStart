import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { navigationRouters } from "constants/routers/routers";
import MainInner from "components/MainInner";
import { IRootReducer } from "redux/IRootReducer";
import { IGetProductsRequest } from "services/products/IProducts";
import { PRODUCTS } from "redux/products/actionTypes";
import { DEPEND_BY_PRODUCT_PAGE, PAGE_NAME } from "constants/environment";

const Routers = () => {
  const dispatch = useDispatch();
  const {
    globalReducer: { currentProductId },
  } = useSelector((s: IRootReducer) => s);
  useEffect(() => {
    const getProducts = (payload: IGetProductsRequest) =>
      dispatch({ type: PRODUCTS.GET_REQUEST, payload });
    getProducts({});
  }, [dispatch]);
  const isRouteHide = (name: string) =>
    !currentProductId && DEPEND_BY_PRODUCT_PAGE.includes(name as PAGE_NAME);
  return (
    <MainInner>
      <Switch>
        {navigationRouters.map((router) => {
          if (isRouteHide(router.name)) {
            return <Redirect key={router.link} to="/" />;
          }
          return (
            <Route
              key={router.link}
              path={router.link}
              exact={router.exact}
              children={router.children}
            />
          );
        })}
        <Redirect from="*" to="/" />
      </Switch>
    </MainInner>
  );
};

export default Routers;
