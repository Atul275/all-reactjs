import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: '',
            val:''
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState(e) {
        this.setState({ data: e.target.value });
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.data} onChange={this.updateState} />
                <p>{this.state.data}</p>
            </div>
        );
    }
}
export default Form;