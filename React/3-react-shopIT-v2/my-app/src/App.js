import React, { Component } from 'react';
import Product from './components/Product';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
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

  renderProducts() {
    let { products } = this.state;
    return products.map((product, idx) => {
      return <Product product={product} key={idx} idx={idx} />
    });
  }

  render() {
    return (
      <div className="container">
        <div className="page-header"> react - shopIT </div>
        <div className="list-group">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default App;
