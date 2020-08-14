import { Product } from '../../shared/generated/graphql';

export interface ProductsState {
  products: {
    [id: number]: Product;
  };
  products_ids: number[];
  error: string;
}
