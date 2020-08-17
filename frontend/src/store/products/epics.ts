import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { getType, isActionOf } from 'typesafe-actions';
import { catchError, switchMap, takeUntil, filter, take } from 'rxjs/operators';

import { Actions } from './actions';

const loadProductsEpic: Epic = (action$) =>
  action$.pipe(
    ofType(getType(Actions.fetchProductsAsync.request)),
    switchMap(({ payload }) => {
      return of(Actions.fetchProductsAsync.success(payload));
    }),
    catchError((error) => of(Actions.fetchProductsAsync.failure(error))),
    takeUntil(action$.pipe(filter(isActionOf(Actions.fetchProductsAsync.cancel)))),
  );

export const epics = [loadProductsEpic];
