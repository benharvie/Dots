import React, { Component } from 'react';
import './App.css';
import Board from './containers/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
