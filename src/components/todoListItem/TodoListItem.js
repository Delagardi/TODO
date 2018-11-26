import React, { Component } from 'react';
import './todoListItem.css';
//TODO something

export default class TodoListItem extends Component {
  render() {
    const { label, important = false } = this.props;

    const styleItem = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    }
    return (
      <span className="todo-list-item">
        <span 
          className="todo-list-item-label"
          style={styleItem}>
          {label}
        </span>
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
        <button type="button"
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>
      </span>
    );
  }
}