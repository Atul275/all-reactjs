import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Reference extends Component {
    constructor(props) {
        super(props);
          
        this.state = {
           data: ''
        }
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
     };
     updateState(e) {
        this.setState({data: e.target.value});
     }
     clearInput() {
        this.setState({data: ''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
     }
     render() {
        return (
           <div>
              <input value = {this.state.data} onChange = {this.updateState} 
                 ref = "myInput"></input>
              <button onClick = {this.clearInput}>Clear</button>
              <p>{this.state.data}</p>
           </div>
        );
     }
  }
export default Reference;