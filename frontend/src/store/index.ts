import { applyMiddleware, createStore, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { ActionType, StateType } from 'typesafe-actions';

// Products flow
import { reducer as productsReducer } from './products/reducer';
import { epics as productsEpics } from './products/epics';
import { ProductsActionType } from './products/actions';

// Order Flow
import { reducer as orderReducer } from './orders/reducer';
import { epics as orderEpics } from './orders/epics';
import {OrderActionType} from './orders/actions';

const rootEpic = combineEpics(
  ...productsEpics,
  ...orderEpics
);
const epicMiddleware = createEpicMiddleware();

// Reducers
const reducer = combineReducers({
  products: productsReducer,
  order: orderReducer
});

export type RootActions = ActionType<ProductsActionType | OrderActionType>;

export type AppState = StateType<typeof reducer>;

export default (preloadedState: any = {}) => {
  const middlewares = [epicMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers: any = composeWithDevTools(...enhancers);

  const store = createStore(reducer, preloadedState, composedEnhancers);

  epicMiddleware.run(rootEpic);

  return store;
};
