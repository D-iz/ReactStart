import classNames from "classnames";
import {
  IMainNavigationMenu,
  navigationMenuProducts,
  navigationMenuSub,
} from "constants/navigation/navigationMenu";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { IRootReducer } from "redux/IRootReducer";

const Navigation = () => {
  const dispatch = useDispatch();
  const {
    globalReducer: { currentProductId },
  } = useSelector((s: IRootReducer) => s);
  const menuLink = "Navigation__link";
  const submenu = "Navigation__submenu";
  const submenuActive = `${submenu}--active`;
  const submenuItem = `${submenu}__item`;
  const submenuItemActive = `${submenuItem}--active`;
  const [activeItem, setActiveItem] = useState({});
  const combineNavigation = currentProductId
    ? [...navigationMenuProducts, ...navigationMenuSub]
    : [...navigationMenuProducts];
  const navigationMenuItem = (item: IMainNavigationMenu, tabIndex: number) => {
    return (
      <li key={item.name + tabIndex}>
        {item.submenu?.length ? (
          navigationMenu(item)
        ) : (
          <NavLink
            onClick={() => {
              setActiveItem(item);
              item.dispatchType && dispatch({ type: item.dispatchType });
            }}
            className={menuLink}
            exact={item.exact}
            to={item.to}
            tabIndex={tabIndex}
          >
            <p>{item.name}</p>
          </NavLink>
        )}
      </li>
    );
  };
  const navigationMenu = (item: IMainNavigationMenu) => {
    const isSameItem = activeItem === item;
    const submenuItemClass = classNames({
      [submenuItem]: true,
      [submenuItemActive]: isSameItem,
    });
    const submenuClass = classNames({
      [submenu]: true,
      [submenuActive]: isSameItem,
    });
    return (
      <>
        <div
          className={submenuItemClass}
          onClick={() => setActiveItem(item === activeItem ? {} : item)}
          onKeyPress={(e) => (e.key === "Enter" ? setActiveItem(item) : null)}
          tabIndex={0}
        >
          <p>{item.name}</p>
        </div>
        <ul className={submenuClass}>
          {item.submenu?.map((item) =>
            navigationMenuItem(item, isSameItem ? 0 : -1)
          )}
        </ul>
      </>
    );
  };
  return (
    <ul className="Navigation">
      {combineNavigation.map((item) => navigationMenuItem(item, 0))}
    </ul>
  );
};

export default Navigation;
