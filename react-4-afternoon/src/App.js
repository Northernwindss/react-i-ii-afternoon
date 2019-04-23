import React, { Component } from 'react';
import Data from './components/data';
import Display from './components/display'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>Home</header>
        <Display />
      </div>
    )
  }


}
export default App;
