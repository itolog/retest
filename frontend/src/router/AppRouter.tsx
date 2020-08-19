import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Loader from '../shared/UI/Loader/Loader';

import Cart from '../pages/Cart/Cart';

const Shipping = React.lazy(() => import('../pages/Shipping/Shipping'));

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/cart' />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/shipping'>
            <Shipping />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
