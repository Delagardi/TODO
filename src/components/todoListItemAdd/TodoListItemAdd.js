import React, { Component } from 'react';
import './todoListItemAdd.css';

export default class TodoListItemAdd extends Component {
  constructor() {
    super();

    this.state = {
      label: ''
    }
  }

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    });
  }

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.onAdded(this.state.label);
  }

  render() {
    return (
      <form 
        className="todoListItemAdd d-flex"
        onSubmit={this.onSubmitForm}>
        <input 
          type="text" 
          className="from-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"/>
        <button 
          className="btn btn-outline-secondary">
          Add item
        </button>
      </form>
    );
  }
}