import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { getType, isActionOf } from 'typesafe-actions';
import { catchError, switchMap, takeUntil, filter, take } from 'rxjs/operators';

import { fetchProductsAsync } from './actions';

const loadProductsEpic: Epic = (action$) =>
  action$.pipe(
    ofType(getType(fetchProductsAsync.request)),
    switchMap(({ payload }) => {
      return of(fetchProductsAsync.success(payload));
    }),
    catchError((error) => of(fetchProductsAsync.failure(error.message))),
    takeUntil(action$.pipe(filter(isActionOf(fetchProductsAsync.cancel)))),
    take(1),
  );

export const epics = [loadProductsEpic];
