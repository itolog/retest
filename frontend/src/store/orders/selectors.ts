import { createSelector } from 'reselect';
import { AppState } from '../index';

export const orderState = (state: AppState) => state.order;
export const productsState = (state: AppState) => state.products;

export const getOrder = createSelector(orderState, (state) => {
  if (Object.keys(state.order).length) {
    const order = [
      {
        ...state.order,
        items: Object.values(state.order.items),
      },
    ];

    return order;
  }
  return {};
});

export const getTotalPrice = createSelector(
  [productsState, orderState],
  (productsState, orderState) => {
    let total: number;
    const priceArray = productsState.products_ids.map((item) => {
      let res;
      if (orderState && orderState?.order) {
        res = orderState.order.items[item]?.quantity * productsState.products[item].price;
      }
      return res;
    });

    if (priceArray.length) {
      total = priceArray.reduce((acc: any, item: any) => acc + item) || 0;
      return total;
    }
  },
);
