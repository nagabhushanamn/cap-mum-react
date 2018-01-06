import React, { Component } from 'react';
import PropTypes from 'proptypes';
import classnames from 'classnames';
import Review from './Review';
import ReviewForm from './ReviewForm'
import { loadProductReviewsAsync } from '../actions/products'
import store from '../store'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: 1
        }
    }
    componentDidMount() {
        let { product } = this.props;
        store.dispatch(loadProductReviewsAsync(product.id))
    }
    handleTabChange(tab) {
        this.setState({
            tab
        });
    }
    renderBuyBtn(product) {
        let { onBuy } = this.props;
        if (product.canBuy)
            return (<button onClick={() => { onBuy(product) }} className="btn btn-sm btn-primary">buy</button>)
        else
            return null;
    }
    renderReviews(product) {
        let reviews = product.reviews || [];
        return reviews.map((review, idx) => {
            return <Review review={review} key={idx} />
        });
    }
    renderProductTabPanel(product) {
        let { tab } = this.state;
        let tabPanel;
        switch (tab) {
            case 1:
                tabPanel = <div className="panel"><p>{product.description}</p></div>
                break;
            case 2:
                tabPanel = <div className="panel"><p>Not Yet</p></div>
                break;
            case 3:
                tabPanel = (
                    <div className="panel">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                {this.renderReviews(product)}
                                <hr />
                                <ReviewForm productId={product.id} />
                            </div>
                        </div>
                    </div>
                )
                break;
            default:
                tabPanel = null;
        }
        return tabPanel;
    }
    render() {
        let { product, idx } = this.props;
        let { tab } = this.state;
        return (
            <div className="list-group-item">
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <img src={product.image} className="img-responsive" alt="Laptop" />
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-9">
                        <span className="badge">{idx + 1}</span>
                        <h4>{product.name}</h4>
                        <h5>&#8377;{product.price}</h5>
                        {this.renderBuyBtn(product)}
                        <hr />
                        <section>
                            <ul className="nav nav-tabs">
                                <li className={classnames({ active: tab === 1, other: false })}><a onClick={() => { this.handleTabChange(1) }} >Description</a></li>
                                <li className={classnames({ active: tab === 2 })}><a onClick={() => { this.handleTabChange(2) }} >Specification</a></li>
                                <li className={classnames({ active: tab === 3 })}><a onClick={() => { this.handleTabChange(3) }} >Reviews</a></li>
                            </ul>
                            {this.renderProductTabPanel(product)}
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    product: PropTypes.object
}

export default Product;