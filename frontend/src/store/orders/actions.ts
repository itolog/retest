import { action, ActionType } from 'typesafe-actions';

import { Order, OrderItem } from '../../shared/interfaces/order';

export enum ActionTypes {
  ADD_ORDER = 'ADD_ORDER',

  UPDATE_ORDER = 'UPDATE_ORDER',

  UPDATE_ORDER_QUANTITY = 'UPDATE_ORDER_QUANTITY',
  UPDATE_ORDER_TOTAL_PRICE = 'UPDATE_ORDER_TOTAL_PRICE'
}

export const Actions = {
  addOrder: (payload: Order) => action(ActionTypes.ADD_ORDER, payload),
  updateOrder: (payload: { [id: number]: OrderItem }) =>
    action(ActionTypes.UPDATE_ORDER, payload),

  updateQuantity: (payload: OrderItem) =>
    action(ActionTypes.UPDATE_ORDER_QUANTITY, payload),

  updateTotal: (payload: number) =>
    action(ActionTypes.UPDATE_ORDER_TOTAL_PRICE, payload)
};

export type OrderActionType = ActionType<typeof Actions>;
