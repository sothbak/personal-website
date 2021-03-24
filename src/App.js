import React, { Component } from 'react';
import app from './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './Containers/Content/Content';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Content/>
      </BrowserRouter>
    );
  }
}

export default App;
