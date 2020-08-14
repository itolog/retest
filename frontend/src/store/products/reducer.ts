import { ProductsAction, fetchProductsAsync } from './actions';
import { getType, PayloadAction, createReducer } from 'typesafe-actions';
import { ProductsState } from './types';

const initialState: ProductsState = {
  products: [],
  error: 'null',
  products_ids: [],
};

export function reducer(state = initialState, action: ProductsAction): ProductsState {
  switch (action.type) {
    case getType(fetchProductsAsync.success): {
      const products = action.payload.reduce(
        (acc, product) => ({
          ...acc,
          [product.id]: product,
        }),
        state.products,
      );

      const products_ids = Object.keys(products).map(Number);
      return {
        ...state,
        products,
        products_ids,
      };
    }
    default: {
      return state;
    }
  }
}
