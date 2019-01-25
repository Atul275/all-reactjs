import React, { Component } from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Animation extends Component {
    constructor(props) {
        super(props);
        this.state= {
            items: ['Item-1...', 'Item-2...', 'Item-3...']
        }
        this.handleAdd = this.handleAdd.bind(this);
    };
    handleAdd() {
        var newItems = this.state.items.concat([prompt('Add New Item')]);
        this.setState({items: newItems});
    }
    handleRemove(i){
        var newItems = this.state.items.slice();
        newItems.splice(i,1);
        this.setState({items: newItems});
    }
    render(){
        var items= this.state.items.map(function(item, i){
            return(
                <div key={item} onClick= {this.handleRemove.bind(this, i)}>{item}
                    <button onClick = {this.handleRemove.bind(this)}>Remove</button>
                </div>
            );
        }.bind(this));

        return(
            <div>
                <button onClick = {this.handleAdd}>Add Item</button>
                <ReactCSSTransitionGroup transitionName = "example"
                    transitionAppear = {500} transitionAppearTimeout = {500}
                   transitionEnterTimeout = {500} transitionLeaveTimeout = {500}>
                      <b>{items}</b>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
export default Animation;