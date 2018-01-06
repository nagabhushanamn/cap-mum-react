import React, { Component } from 'react';
import Product from './components/Product';
import ViewCart from './components/ViewCart';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      products: [
        {
          id: 1,
          name: 'Laptop',
          price: 198000,
          description: 'New Mac',
          canBuy: true,
          image: 'images/Laptop.png',
          reviews: [
            { stars: 5, author: 'nag@email.com', body: 'Good one' },
            { stars: 2, author: 'indu@email.com', body: 'costly one' }
          ]
        },
        {
          id: 2,
          name: 'Mobile',
          price: 18000,
          description: 'New pro',
          canBuy: true,
          image: 'images/Mobile.png',
          reviews: [
            { stars: 5, author: 'nag@email.com', body: 'Good one' },
            { stars: 2, author: 'indu@email.com', body: 'costly one' }
          ]
        }
      ]
    }
  }

  addToCart(item) {
    this.setState({
      cart: this.state.cart.concat(item)
    })
  }
  toggleCart() {
    this.setState({
      showCart: !this.state.showCart
    });
  }

  handleNewReview(review, id) {
    let { products } = this.state;
    products = products.map((product, idx) => {
      if (product.id === id) {
        product.reviews.push(review);
        return product
      }
      else
        return product;
    })
    this.setState({
      products
    });
  }

  renderProducts() {
    let { products } = this.state;
    return products.map((product, idx) => {
      return <Product onBuy={(item) => { this.addToCart(item) }} onNewReview={(review, id) => { this.handleNewReview(review, id) }} product={product} key={idx} idx={idx} />
    });
  }

  render() {
    let { cart } = this.state;
    return (
      <div className="container">
        <div className="page-header"> react - shopIT </div>
        <span className="badge">{cart.length}</span> in cart
        <hr />
        <Router>
          <div>
            <ul className="nav nav-pills">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cart">View-cart</Link></li>
            </ul>
            <hr />
            <div className="list-group">
              <Route exact path="/" render={this.renderProducts.bind(this)}>
              </Route>
              <Route path="/cart">
                <ViewCart items={cart} />
              </Route>
            </div>
          </div>
        </Router>
        <hr />

      </div>
    );
  }
}

export default App;
