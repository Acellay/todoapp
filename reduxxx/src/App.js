import React, { Component } from 'react';
import './App.css';
import Hoge from "./hoge";

class App extends Component {
  render() {
    return (
      <div>
        <Hoge param={1} />
        <Hoge param={2} />
        <Hoge param={3} />
      </div>
    );
  }
}

export default App;
