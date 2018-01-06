import React, { Component } from 'react';
import Product from './components/Product';
import ViewCart from './components/ViewCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      showCart: false,
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
    let { products, showCart, cart } = this.state;
    if (showCart) {
      return <ViewCart items={cart} />
    } else {
      return products.map((product, idx) => {
        return <Product onBuy={(item) => { this.addToCart(item) }} onNewReview={(review, id) => { this.handleNewReview(review, id) }} product={product} key={idx} idx={idx} />
      });
    }
  }

  render() {
    let { cart, showCart } = this.state;
    return (
      <div className="container">
        <div className="page-header"> react - shopIT </div>
        <span className="badge">{cart.length}</span> in cart  | <a href="#" onClick={() => { this.toggleCart() }}>{showCart ? 'View Products' : 'View Cart'}</a>
        <hr />
        <div className="list-group">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default App;
