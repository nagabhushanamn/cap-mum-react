


import rootReducer from '../reducers';
import { createStore,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const preloadedState = {
    products: [],
    cart: []
}

//const store = createStore(rootReducer, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



let middleware = [thunk];
const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
));


export default store;