import * as React from 'react';
import ReactDOM from 'react-dom';
import {all, put, takeLatest} from 'redux-saga/effects';
import {LOAD_APP, LOAD_CART, LOAD_PRODUCTS} from '../constants';
import {ComposedApp} from '../..';

const cartData = [
  {
    id: '01',
    name: 'Saree',
    quantity: 1,
    price: 3300,
  },
  {
    id: '02',
    name: 'Saree Collection - 2',
    quantity: 2,
    price: 3300,
  },
];

let productsData = [
  {
    id: '01',
    name: 'Saree 1 has a very very very very very very long title',
    url: './images/saree.jpg',
    price: 200,
    special: 'COD Available',
  },
  {
    id: '02',
    name: 'Saree 2',
    url: './images/saree.jpg',
    price: 200,
    special: 'COD Available',
  },
  {
    id: '03',
    name: 'Saree 3',
    url: './images/saree.jpg',
    price: 200,
    special: 'COD Available',
  },
  {
    id: '04',
    name: 'Saree 4',
    url: './images/saree.jpg',
    price: 200,
    special: 'COD Available',
  },
  {
    id: '05',
    name: 'Saree 5',
    url: './images/saree.jpg',
    price: 200,
    special: 'COD Available',
  },
];

export function* LoadApp(payload) {
  yield put({
    type: LOAD_CART,
    payload: {
      cartItems: cartData,
    },
  });

  yield put({
    type: LOAD_PRODUCTS,
    payload: {
      products: productsData,
    },
  });
  ReactDOM.render(<ComposedApp />, document.getElementById('root'));
}

export function* WatchLoadApp(payload) {
  yield takeLatest(LOAD_APP, LoadApp);
}

export function* rootSaga() {
  yield all([WatchLoadApp()]);
}
