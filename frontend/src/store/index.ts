import { applyMiddleware, createStore, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { ActionType, StateType } from 'typesafe-actions';

// Products flow
import {reducer as productsReducer} from './products/reducer';
import {epics as productsEpics} from './products/epics';
import {ProductsAction} from './products/actions';

const rootEpic = combineEpics(
  ...productsEpics
);
const epicMiddleware = createEpicMiddleware();

// Reducers
const reducer = combineReducers({
  products: productsReducer
});

export type RootActions = ActionType<ProductsAction>;

export type AppState = StateType<typeof reducer>;

export default (preloadedState: any = {}) => {
  const middlewares = [ epicMiddleware ];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [ middlewareEnhancer ];
  const composedEnhancers: any = composeWithDevTools(...enhancers);

  const store = createStore(reducer, preloadedState, composedEnhancers);

  epicMiddleware.run(rootEpic);

  return store;
};
