
import { LOAD_PRODUCTS, ADD_NEW_REVIEW } from '../constants';

export function productsReducer(state = [], action) {
    switch (action.type) {
        case 'LOAD_PRODUCTS_SUCCESS': {
            return [...state, ...action.products]
        }
        case 'LOAD_PRODUCT_REVIEWS': {
            let products = state.map((product, idx) => {
                if (product.id === action.productId) {
                    product.reviews = [...action.reviews]
                }
                return product;
            })
            return products;
        }
        case ADD_NEW_REVIEW: {
            let products = state.map((product, idx) => {
                if (product.id === action.productId) {
                    if (product.reviews) {
                        product.reviews.push(action.newReview);
                    }
                    product.reviews = [...product.reviews]
                }
                return product;
            })
            return products;
        }
        default:
            return state;

    }
}