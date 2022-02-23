import { ERoutes } from "constants/routers/routes";

export interface IMainNavigationMenuItem {
  name: string;
  to: string;
  exact?: boolean;
  dispatchType?: string;
}

export interface IMainNavigationMenu extends IMainNavigationMenuItem {
  submenu?: IMainNavigationMenuItem[];
}

export const navigationMenuProducts: IMainNavigationMenu[] = [
  {
    name: "Products",
    to: ERoutes.HOME,
  },
];
export const navigationMenuSub: IMainNavigationMenu[] = [
  {
    name: "Creatives Table",
    to: ERoutes.CREATIVES_TABLE,
  },
  {
    name: `Logs`,
    to: ERoutes.LOGS,
  },
];
