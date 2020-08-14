import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { getType } from 'typesafe-actions';
import { catchError, switchMap } from 'rxjs/operators';

import { fetchProductsAsync } from './actions';

const loadProductsEpic: Epic = (action$) =>
  action$.pipe(
    ofType(getType(fetchProductsAsync.request)),
    switchMap(({ payload }) => {
      console.log(payload);
      return of(fetchProductsAsync.success(payload));
    }),
    catchError((error) => of(fetchProductsAsync.failure(error.message)))
  );

export const epics = [loadProductsEpic];
