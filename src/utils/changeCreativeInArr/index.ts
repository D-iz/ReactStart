import { ICreative } from "redux/_global/ICreative";

export const changeCreativeInArr = <T extends ICreative>(a: T[], b: T) => {
  switch (true) {
    case b == null:
      return a;
    case a.length === 0:
      return [b];
    case a.some((i) => i.id === b.id):
      return a.map((i) => (i.id === b.id ? b : i));
    default:
      return [...a, b];
  }
};
