import React, { Component } from 'react';
import './todoListItemAdd.css';

export default class TodoListItemAdd extends Component {
  render() {
    const { onAdded } = this.props;

    return (
      <div className="todoListItemAdd">
        <button 
          className="btn btn-outline-secondary"
          onClick={ () => onAdded('Text for testing') }>
          Add item
        </button>
      </div>
    );
  }
}