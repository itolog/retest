import { createSelector } from 'reselect';
import { AppState } from '../index';

export const productsState = (state: AppState) => state.products;

export const getProducts = createSelector(productsState, (state) =>
  state.products_ids.map((id) => state.products[id]),
);
