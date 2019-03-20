import React, { Component } from 'react';
import './App.css';

import AnimalsWrapper from './components/AnimalsWrapper'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{borderBottom: '1px solid #d3d3d3'}}>
          <h1>Our Zoo Animals!!!!!!</h1>
        </header>
        <AnimalsWrapper />
      </div>
    );
  }
}

export default App;
