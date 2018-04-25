import React, { Component } from 'react';
import { render } from 'react-dom';
import { hello } from './App.css';


export default class Hello extends Component {
  render() {
    return (
      <div id={hello}>
        Hello from react
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));