
import { LOAD_PRODUCTS, ADD_NEW_REVIEW } from '../constants';
import $ from 'jquery';
let apiURL = "http://localhost:8080/api/products"
export function loadProducts() {
    return function (dispatch) {
        dispatch({ type: 'LOAD_PRODUCTS_BEGIN' });
        $.ajax(apiURL, {
            method: 'GET',
            success: function (resp) {
                dispatch({ type: 'LOAD_PRODUCTS_SUCCESS', products: resp });
            },
            failure: function (error) {
                dispatch({ type: 'LOAD_PRODUCTS_FAILED', error });
            }
        })
    }
}

export function addNewReview(newReview, productId) {
    return { type: ADD_NEW_REVIEW, newReview, productId };
}

export function loadProductReviews(reviews, productId) {
    return { type: 'LOAD_PRODUCT_REVIEWS', reviews, productId };
}


export function loadProductReviewsAsync(productId) {
    return function (dispatch) {
        $.ajax(`http://localhost:8080/api/products/${productId}/reviews`, {
            method: 'GET',
            success: function (reviews) {
                dispatch(loadProductReviews(reviews, productId))
            },
            failure: function (error) {
                console.dir(error);
            }
        })
    }
}

export function addNewReviewAsync(newReview, productId) {
    return function (dispatch) {
        $.ajax(`http://localhost:8080/api/products/${productId}/reviews`, {
            method: 'POST',
            data: JSON.stringify(newReview),
            contentType: 'application/json',
            success: function (review) {
                dispatch(addNewReview(review, productId))
            },
            failure: function (error) {
                dispatch({ type: 'NEW_REVIEW_ERROR', error })
            }
        })
    }
}

