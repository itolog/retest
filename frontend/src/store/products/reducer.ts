import {ProductsAction, fetchProductsAsync} from './actions';
import { getType } from 'typesafe-actions';
import {ProductsState} from './types';

const initialState: ProductsState = {
  products: [],
  error: 'null',
  products_ids: []
};

export function reducer(
  state = initialState,
  action: ProductsAction
): ProductsState {
  switch (action.type) {
    case getType(fetchProductsAsync.success): {

      return {
        ...state,
        products: action.payload
      };
    }
    default: {
      return state;
    }
  }
}