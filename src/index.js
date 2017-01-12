import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// creates store by calling the configureStore() method in src/store/configureStore.js
const store = configureStore();

// The <Provider> makes our Redux store available to any connect()() calls within child components. This is how mapStateToProps can access our state.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
