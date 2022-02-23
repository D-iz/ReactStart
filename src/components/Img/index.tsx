import classNames from "classnames";
import { IImgProps } from "./IImgProps";
import React, { useState } from "react";
import "./style.scss";

const Img: React.FC<IImgProps> = ({
  src,
  title = src,
  alt = src,
  className,
}) => {
  const [loaded, setLoaded] = useState(false);
  const defaultImage = "/images/crashedicon.png";
  let imgClass = classNames(className, {
    Img: true,
    loaded: loaded,
  });
  return (
    <div className={imgClass}>
      <img
        className="Img-pic"
        src={src}
        title={title}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={({ currentTarget }) => {
          setLoaded(true);
          currentTarget.src = defaultImage;
        }}
      />
    </div>
  );
};

export default Img;
