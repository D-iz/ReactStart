import React from "react";
import { ERoutes } from "./routes";
import Tables from "containers/Tables";
import Logs from "containers/Logs";
import Products from "containers/Products";
import { PAGE_NAME } from "constants/environment";

export interface INavigationRouters {
  link: string;
  name: string;
  children: React.ReactNode;
  exact?: boolean;
}

export const navigationRouters: INavigationRouters[] = [
  {
    name: PAGE_NAME.HOME,
    link: ERoutes.HOME,
    children: <Products />,
    exact: true,
  },
  {
    name: PAGE_NAME.CREATIVES_TABLE,
    link: ERoutes.CREATIVES_TABLE,
    children: <Tables />,
  },
  {
    name: PAGE_NAME.LOGS,
    link: ERoutes.LOGS,
    children: <Logs />,
  },
];
