import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { getType } from 'typesafe-actions';
import { switchMap } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { Order } from '../../shared/interfaces/order';

import { Actions } from './actions';
import { Actions as ProductAction, ActionTypes } from '../products/actions';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

const addOrderEpic: Epic = (action$) =>
  action$.pipe(
    ofType(getType(ProductAction.fetchProductsAsync.success)),
    switchMap(({ payload }) => {
      // generete ID for INVOICE
      const invoice_id = uuidv4();
      // generete ID for customer (mock)
      const customer_id = getRandomInt(10);
      const items = payload.map((item: Order) => ({
        invoice_id,
        product_id: item.id,
        quantity: 1,
      }));

      const res = items.reduce(
        (acc: any, invoice: any) => ({
          ...acc,
          [invoice.product_id]: invoice,
        }),
        [],
      );

      const order = {
        id: invoice_id,
        customer_id,
        totalPrice: 0,
        items: res,
      };
      return of(Actions.addOrder(order));
    }),
  );

const updateOrderEpic: Epic = (action$, state$) =>
  action$.pipe(
    ofType(ActionTypes.REMOVE_PRODUCTS),
    switchMap(() => {
      const products_ids = state$.value.products.products_ids;
      const items = products_ids.reduce(
        (acc: any, item: any) => ({
          ...acc,
          [item]: state$.value.order.order.items[item],
        }),
        [],
      );

      return of(Actions.updateOrder(items));
    }),
  );

export const epics = [addOrderEpic, updateOrderEpic];
