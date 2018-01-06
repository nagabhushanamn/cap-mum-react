

import { BUY } from '../constants';

export function cartReducer(state = [], action) {
    switch (action.type) {
        case BUY:
            return [...state, action.product]
        default:
            return state;
    }
}
