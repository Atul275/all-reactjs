import React, { Component } from 'react';
import './App.css';
import App1 from './App1';
import State from './State';
import Event from './Event';
import Form from './Form';
import Reference from './Ref';
import Lists from './Lists'
import Routing from './Routing';
import Animation from './Animation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routing/><hr/>
        <Event/><hr/>
        <State/><hr/>
        <Form/><hr/>
        <Reference/><hr/>
        <Lists/><hr/>
        <Animation/><hr/>
        <App1/>
      </div>
    );
  }
}
export default App;