import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import createStore from './store';
import { config } from './shared/config/config';
import './shared/styles/root.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore();

const client = new ApolloClient({
  uri: config.API_ENDPOINT,
  cache: new InMemoryCache({
    addTypename: false
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
