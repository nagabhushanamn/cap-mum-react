import React, { Component } from 'react';
import classnames from 'classnames'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
      products: [
        {
          name: 'Laptop',
          price: 198000,
          description: 'New Mac',
          canBuy: true,
          image: 'images/Laptop.png'
        },
        {
          name: 'Mobile',
          price: 18000,
          description: 'New pro',
          canBuy: true,
          image: 'images/Mobile.png'
        }
      ]
    }
  }
  handleTabChange(tab) {
    this.setState({
      tab
    });
  }
  renderBuyBtn(product) {
    if (product.canBuy)
      return (<button className="btn btn-sm btn-primary">buy</button>)
    else
      return null;
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
        tabPanel = <div className="panel"><p>None Yet</p></div>
        break;
      default:
        tabPanel = null;
    }
    return tabPanel;
  }
  renderProducts() {
    let { products, tab } = this.state;
    return products.map((product, idx) => {
      return (
        <div key={idx} className="list-group-item">
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
      )
    })
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
