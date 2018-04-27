import React, { Component } from 'react';
import { render } from 'react-dom';
import { hello } from './App.css';
import { Header } from './Header.jsx';
import { Board } from './Board.jsx';

export default class Hello extends Component {
  render() {
    return (
      <div id={hello}>
        <Header />
        Hello from react
        <Board />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));