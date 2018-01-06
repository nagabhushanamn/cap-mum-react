import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import CommentList from './components/CommentList';
import TopicList from './components/TopicList';

class App extends Component {

  hanleTopicSelect(topic) {
    console.log(`${topic} selected...`);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
          <div className="page-header">Sample App</div>
          <CommentList />
          <TopicList onTopicSelect={this.hanleTopicSelect.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
