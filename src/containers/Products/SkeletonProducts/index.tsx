import React from "react";
import { Stub } from "components/Stub";
import "./style.scss";

export const SkeletonProducts = () => (
  <div className="SkeletonProducts">
    <div className="SkeletonProducts__preview">
      <Stub height={15} />
    </div>
    <div>
      <Stub height={1.4} />
    </div>
  </div>
);
