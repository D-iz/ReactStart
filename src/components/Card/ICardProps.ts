import { IProduct, IProductId } from "redux/_global/IProduct";
import { MouseEventHandler } from "react";

export interface ICardProps {
  item: IProduct;

  handlerClickCard(
    props: IProductId
  ): MouseEventHandler<HTMLDivElement> | undefined;
}
