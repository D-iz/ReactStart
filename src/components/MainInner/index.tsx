import React from "react";
import "./style.scss";

const MainInner: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children }) => {
  return <div className="MainInner">{children}</div>;
};

export default MainInner;
