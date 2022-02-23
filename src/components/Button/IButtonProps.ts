export enum EButtonSize {
  small,
  medium,
  big,
  large,
}

export enum EButtonColor {
  red,
  blue,
  green,
  yellow,
  orange,
}

export interface IButtonProps {
  reversed?: boolean;
  size?: EButtonSize;
  colour?: EButtonColor;
}
