import React, { Component } from 'react';
import './App.css';

class Event extends Component {
  btnClick(){
    alert('Hello React Event');
  }
  render() {
    return (
      <div className="Event">
        <button onClick={this.btnClick}>Click Me</button>
      </div>
    );
  }
}
export default Event;