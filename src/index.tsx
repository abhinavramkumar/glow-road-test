import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import AppRouter from './router';
import store from './config';
import {Provider} from 'react-redux';
import 'sanitize.css';
import 'typeface-open-sans';
import './styles/index.scss';
import {LOAD_APP} from './config/constants';

export const ComposedApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

const Loading = () => <p>Loading...</p>;

ReactDOM.render(<Loading />, document.getElementById('root'));

store.dispatch({
  type: LOAD_APP,
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
