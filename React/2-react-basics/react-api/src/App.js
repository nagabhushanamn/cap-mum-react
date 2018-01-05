import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Message from './Message';
import Box from './Box';
import Product from './Product';
import Parent from './Parent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'greetings'
    }
    console.log('App :: constructor');
  }
  changeMessage(message) {
    this.setState({
      message
    });
  }
  renderMessage() {
    let { message } = this.state;
    if (message)
      return <Message message={this.state.message} />
    else
      return null;
  }
  render() {
    console.log('App :: render');
    return (
      <div className="container">
        <div className="page-header"> React API </div>
        <button className="btn btn-primary" onClick={() => { this.changeMessage('good Morning') }}> GM </button>
        <button className="btn btn-primary" onClick={() => { this.changeMessage('good Noon') }}> GN </button>
        <button className="btn btn-primary" onClick={() => { this.changeMessage('good Evening') }}> GE </button>
        <button className="btn btn-primary" onClick={() => { this.changeMessage('') }}> Remove Message </button>
        <hr />
        {/* {this.renderMessage()} */}
        <hr />
        {/*
         <Box>
          <Message />
          <Message />
        </Box>
        <Box>
            <Product />
            <Product />
        </Box> 
        */
        }
        <Parent />
      </div>
    );
  }
}

export default App;
