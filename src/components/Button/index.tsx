import React from "react";
import classNames from "classnames";
import { EButtonColor, EButtonSize, IButtonProps } from "./IButtonProps";
import "./style.scss";

const Button: React.FC<
  IButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  type,
  disabled,
  onClick,
  children,
  className,
  tabIndex,
  reversed = false,
  size = EButtonSize.medium,
  colour = EButtonColor.orange,
}) => {
  let btnClass = classNames(className, {
    Button: true,
    reversed: reversed,

    small: size === EButtonSize.small,
    medium: size === EButtonSize.medium,
    big: size === EButtonSize.big,
    large: size === EButtonSize.large,

    red: colour === EButtonColor.red,
    blue: colour === EButtonColor.blue,
    green: colour === EButtonColor.green,
    yellow: colour === EButtonColor.yellow,
    orange: colour === EButtonColor.orange,
  });
  return (
    <button
      className={btnClass}
      tabIndex={tabIndex}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
