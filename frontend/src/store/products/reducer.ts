import { ProductsAction, Actions, ActionTypes } from './actions';
import { getType } from 'typesafe-actions';
import { ProductsState, Products } from './types';

const initialState: ProductsState = {
  products: {},
  error: null,
  products_ids: [],
};

function removeKey(obj: Products, deleteKey: number) {
  let clone = Object.assign({}, obj);
  delete clone[deleteKey];
  return clone;
}

export function reducer(state = initialState, action: ProductsAction): ProductsState {
  switch (action.type) {
    case getType(Actions.fetchProductsAsync.request): {
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
    case getType(Actions.fetchProductsAsync.failure): {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ActionTypes.REMOVE_PRODUCTS: {
      const products_ids = state.products_ids.filter((item) => item !== action.payload);
      const products = removeKey(state.products, action.payload);
      return {
        ...state,
        products_ids,
        products,
      };
    }
    default: {
      return state;
    }
  }
}
