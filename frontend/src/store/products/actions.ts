import { createAsyncAction, ActionType } from 'typesafe-actions';
import { Product } from '../../shared/generated/graphql';

export const fetchProductsAsync = createAsyncAction(
  'FETCH_PRODUCTS_REQUEST',
  'FETCH_PRODUCTS_SUCCESS',
  'FETCH_PRODUCTS_FAILURE',
  'FETCH_PRODUCTS_CANCEL'
)<Product[], Product[], Error, string>();

export type ProductsAction = ActionType<typeof fetchProductsAsync>;
