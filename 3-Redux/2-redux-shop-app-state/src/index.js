
console.log('-index.js-');

import store from './store'
import {addNewReviewAsync,loadProducts} from './actions/products';
import { buy } from './actions/cart';

// Load all products
store.dispatch(loadProducts())


document.getElementById('newReview')
    .addEventListener('click', function () {
        let newReview = { stars: 5, author: 'nagemail.com', body: 'i liked it' }
        store.dispatch(addNewReviewAsync(newReview, '5a50a1ef06f3da38787067aa'))
    });


document.getElementById('buy')
    .addEventListener('click', function () {
        store.dispatch(buy('laptop'))
    });


store.subscribe(function () {
    let state = store.getState();
    console.dir(state);
});    