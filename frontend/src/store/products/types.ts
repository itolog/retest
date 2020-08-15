import { Product } from '../../shared/generated/graphql';

export interface Products {
  [id: number]: Product;
}

export interface ProductsState {
  products: Products;
  products_ids: number[];
  error: Error | null;
}
