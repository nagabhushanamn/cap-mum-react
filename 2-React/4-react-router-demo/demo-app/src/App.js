import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div className="well">
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div className="well">
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div className="alert alert-danger">
    <h3> Topic : {match.params.topicName}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div className="jumbotron">
    <h2>Topics</h2><hr />
    <ul className="nav nav-pills">
      <li>
        <Link to={`${match.url}/react`}>
          React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/redux`}>
          Redux
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/js`}>
          JavaScript
        </Link>
      </li>
    </ul>
    <hr />
    <Route path={`${match.url}/:topicName`} component={Topic} />
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-header"> react - router </div>
        <Router>
          <div>
            <ul className="nav nav-pills">
              <li><Link to="/"> Home </Link></li>
              <li><Link to="/about"> About </Link></li>
              <li><Link to="/topics">Topics</Link></li>
            </ul>
            <hr />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
