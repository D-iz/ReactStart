import React from "react";
import "./style.scss";
import { ILink } from "components/Link/ILinkProps";
import { Link as ReactLink } from "react-router-dom";

const Link: ILink = (props): JSX.Element => {
  const { children, onClick } = props;
  if ("href" in props) {
    return (
      <a
        className="Link"
        onClick={onClick}
        href={props.href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <ReactLink to={props.to} className="Link" onClick={onClick}>
      {children}
    </ReactLink>
  );
};

export default Link;
