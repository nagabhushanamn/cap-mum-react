
console.log('-index.js-');

// Action(s) 
//----------------------------------------
const INCREMENT = "increment"
const DECREMENT = "decrement"
const BUY = "buy"
//----------------------------------------


// Action Creator(s) 
//----------------------------------------
function increment(value) {
    return { type: INCREMENT, value }
}
function decreemnt(value) {
    return { type: DECREMENT, value }
}
function buy(product) {
    return { type: BUY, product }
}
//----------------------------------------

// Reducer(s)

function counterReducer(state = { count: 0 }, action) {
    console.log('counterReducer');
    switch (action.type) {
        case INCREMENT:
        case BUY:
            return Object.assign({}, state, { count: state.count + action.value || state.count + 1 });
        case DECREMENT:
            return Object.assign({}, state, { count: state.count - action.value });
        default:
            return state;
    }
}
function cartReducer(state = { items: [] }, action) {
    console.log('cartReducer');
    switch (action.type) {
        case BUY:
            return Object.assign({}, state, { items: [...state.items, action.product] });
        default:
            return state;
    }
}

import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    counter: counterReducer,
    cart: cartReducer
});
//----------------------------------------

// store
import { createStore } from 'redux';
const preloadedState = {
    counter: {
        count: 100
    },
    cart: {
        items: [
            "biryani"
        ]
    }
}
const store = createStore(rootReducer, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//----------------------------------------

// Counter-App View/UI 

//------------------------------------------
let countDisplay = document.getElementById('countDisplay');
countDisplay.innerText = store.getState().counter.count;

store.subscribe(function () {
    const state = store.getState();
    //console.dir(state);
    countDisplay.innerText = state.counter.count;
});
//------------------------------------------

// store.dispatch(increment(1));
// store.dispatch(increment(10));
// store.dispatch(increment(100));

document.getElementById('inc').addEventListener('click', function () {
    store.dispatch(increment(1));
});

document.getElementById('dec').addEventListener('click', function () {
    store.dispatch(decreemnt(1));
});
document.getElementById('buy').addEventListener('click', function () {
    store.dispatch(buy('biryani'));
});
//------------------------------------------












