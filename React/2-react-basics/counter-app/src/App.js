import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HitButton from './components/HitButton'
import TotalCountDisplay from './components/TotalCountDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: 0
    }
    console.log('App :: constructor()');
  }
  incrementTotalCount() {
    this.setState({
      totalCount: this.state.totalCount + 1
    });
  }
  render() {
    console.log('App :: render()');
    let { title } = this.props;
    let { totalCount } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">react - {title}</div>
          <div className="panel-body">
            <div>
              <HitButton onHit={()=>{this.incrementTotalCount()}} label="1" />
              <HitButton onHit={()=>{this.incrementTotalCount()}} label="10" />
              <HitButton onHit={()=>{this.incrementTotalCount()}} label="-10" />
            </div>
            <div style={{ clear: 'both' }}>
              <hr />
              <TotalCountDisplay total={totalCount} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
