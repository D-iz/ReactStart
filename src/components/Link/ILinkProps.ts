export interface ILinkProps {
  children: string | JSX.Element;
  onClick?(e: React.MouseEvent<HTMLElement>): void;
}

export type ILink = {
  (param: ILinkProps & { to: string }): JSX.Element;
  (param: ILinkProps & { href: string }): JSX.Element;
};
