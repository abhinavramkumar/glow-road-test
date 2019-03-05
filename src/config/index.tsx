import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas';
import {cartReducer, productsReducer, offersReducer} from './reducers';
import {ICart} from './types';
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    cart: cartReducer,
    products: productsReducer,
    offers: offersReducer,
  }),
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
