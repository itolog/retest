import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Cart from '../pages/Cart/Cart';
import Shipping from '../pages/Shipping/Shipping';

const AppRouter: React.FC = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default AppRouter;
