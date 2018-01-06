

import { productsReducer } from './products'
import { cartReducer } from './cart'
import { combineReducers } from 'redux';

export default combineReducers({
    products: productsReducer,
    cart: cartReducer
});
