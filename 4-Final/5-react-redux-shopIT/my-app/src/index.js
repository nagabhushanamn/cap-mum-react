import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from './store';
import { loadProducts } from './actions/products';

store.dispatch(loadProducts());
// let products = store.getState().products;
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

