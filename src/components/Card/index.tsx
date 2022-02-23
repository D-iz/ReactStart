import { ICardProps } from "components/Card/ICardProps";
import Img from "components/Img";
import "./style.scss";
import { DEFAULT_PREVIEW_PRODUCT } from "constants/environment";

const Card = ({ item, handlerClickCard }: ICardProps) => {
  const preview = DEFAULT_PREVIEW_PRODUCT; //TODO change preview_url when will be true
  return (
    <div className="Card" onClick={handlerClickCard({ productId: item.id })}>
      <Img src={preview} title="" />
      <div>{item.name}</div>
    </div>
  );
};

export default Card;
