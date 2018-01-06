

import { BUY } from '../constants';

export function buy(product) {
    return { type: BUY, product }
}