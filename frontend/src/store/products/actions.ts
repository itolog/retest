import { createAsyncAction, ActionType, action } from 'typesafe-actions';
import { Product } from '../../shared/generated/graphql';

export enum ActionTypes {
  REMOVE_PRODUCTS = 'REMOVE_PRODUCTS',
}

export const Actions = {
  fetchProductsAsync: createAsyncAction(
    'FETCH_PRODUCTS_REQUEST',
    'FETCH_PRODUCTS_SUCCESS',
    'FETCH_PRODUCTS_FAILURE',
    'FETCH_PRODUCTS_CANCEL',
  )<Product[], Product[], Error, string>(),

  removeProducts: (id: number) => action(ActionTypes.REMOVE_PRODUCTS, id),
};

export type ProductsActionType = ActionType<typeof Actions>;
