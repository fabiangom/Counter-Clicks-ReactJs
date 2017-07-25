import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  plusClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  lessClick() {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Counter of Clicks with ReactJs</h2>
        </div>
        <div>
          <h1>{this.state.count}</h1>
          <button className="btn" onClick={this.lessClick.bind(this)}>Less!</button>
          <button className="btn" onClick={this.plusClick.bind(this)}>Plus!</button>
        </div>
      </div>
    );
  }
}
