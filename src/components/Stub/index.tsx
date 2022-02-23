import React from "react";
import { IStubProps } from "./IStubProps";
import "./style.scss";

const Stub = ({ width, height }: IStubProps) => {
  const currentWidth = width ? `${width}rem` : "auto";
  return (
    <div
      className="Stub"
      style={{
        width: currentWidth,
        height: `${height}rem`,
      }}
    ></div>
  );
};

export { Stub };
