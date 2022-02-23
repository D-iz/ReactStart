import React from "react";
import { Link } from "react-router-dom";
import { ERoutes } from "constants/routers/routes";
import Img from "components/Img";
import Navigation from "components/Navigation";
import "./style.scss";

const GlobalLayout: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div className="GlobalLayout opacity-show">
      <div className="GlobalLayout__Sidebar">
        <Link to={ERoutes.HOME} style={{ width: "10rem", margin: "1rem auto" }}>
          <Img
            src={"/images/logo512.png"}
            alt="Logo"
            className="Logo"
          />
        </Link>
        <Navigation />
      </div>
      <div className="GlobalLayout__Main">{children}</div>
    </div>
  );
};

export default GlobalLayout;
