import React, { Component } from 'react';

class State extends Component {
    constructor() {
        super();
        this.state ={
            count: 20
        };
    }
    clickMe1(){
        this.setState({
            count: this.state.count +1
        });
    }

    clickMe2(){
        this.setState({
            count: this.state.count -1
        });
    }
    render() {
        return (
            <div>
                <p>Value : {this.state.count}</p>
                <button onClick={this.clickMe2.bind(this)}>Decrement-1</button>
                <button onClick={this.clickMe1.bind(this)}>Increment+1</button>
            </div>
        )
    }
}

export default State;