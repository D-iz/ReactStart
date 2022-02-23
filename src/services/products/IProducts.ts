import { IProductService } from "services/_global/IProductService";

export interface IGetProductsResponseService {
  products: IProductService[];
}

export interface IGetProductsRequest {}
