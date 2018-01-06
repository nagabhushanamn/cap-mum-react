import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';
import { loadProducts } from './actions/products';

// load products
store.dispatch(loadProducts());

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>), document.getElementById('root'));
registerServiceWorker();

