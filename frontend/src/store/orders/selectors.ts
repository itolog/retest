import { createSelector } from 'reselect';
import { AppState } from '../index';

export const invoiceState = (state: AppState) => state.order;
export const productsState = (state: AppState) => state.products;

export const getTotalPrice = createSelector(
  [productsState, invoiceState],
  (productsState, invoiceState) => {
    let total: number;
    const priceArray = productsState.products_ids.map((item) => {
      let res;
      if (invoiceState && invoiceState?.order) {
        res =
          invoiceState.order.items[item]?.quantity *
          productsState.products[item].price;
      }
      return res;
    });

    if (priceArray.length) {
      total = priceArray.reduce((acc: any, item: any) => acc + item) || 0;
      return total;
    }
  }
);
