import React, { Component } from 'react';
import './App.css';
import PropTypes  from 'prop-types';

class App1 extends Component {
  render() {
    return (
      <div className="App1">
        <h1>React tutorial</h1>
        <h2>Hello, {this.props.name}</h2>
        <h2>Array: {this.props.propArray}</h2>
        <h2>Bool: {this.props.propBool ? 'True' :'False'}</h2>
        <h2>Func: {this.props.propFun(3)}</h2>
        <h2>Number: {this.props.propNumber}</h2>
      </div>
    );
  }
}
App1.propTypes ={
  name: PropTypes.string,
  propArray : PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFun : PropTypes.func,
  propNumber : PropTypes.number,
};

App1.defaultProps ={
  name: 'John',
  propArray: [1,4,6,7],
  propBool: false,
  propFun: function(e){
    return e;
  },
  propNumber: 10
}
export default App1;