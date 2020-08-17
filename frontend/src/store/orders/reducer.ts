import { ActionTypes, OrderActionType } from './actions';
import { OrderState } from './types';

const initialState: OrderState = {
  order: null
};

export function reducer(
  state = initialState,
  action: OrderActionType
): OrderState {
  switch (action.type) {
    case ActionTypes.ADD_ORDER: {
      return {
        order: action.payload
      };
    }
    case ActionTypes.UPDATE_ORDER_QUANTITY: {
      if (!state.order) return state;
      return {
        order: {
          ...state.order,
          items: {
            ...state.order?.items,
            [action.payload.product_id]: {
              product_id: action.payload.product_id,
              quantity: action.payload.quantity
            }
          }
        }
      };
    }
    case ActionTypes.UPDATE_ORDER_TOTAL_PRICE: {
      if (!state.order) return state;
      return {
        order: {
          ...state.order,
          totalPrice: action.payload
        }
      };
    }
    case ActionTypes.UPDATE_ORDER: {
      if (!state.order) return state;
      return {
        order: {
          ...state.order,
          items: action.payload
        }
      };
    }
    default: {
      return state;
    }
  }
}
