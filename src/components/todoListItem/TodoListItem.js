import React, { Component } from 'react';
import './todoListItem.css';

export default class TodoListItem extends Component {
  constructor() {
    super();
    this.state = {
      done: false,
      important: false
    }
  }

  render() {
    const { 
      label, 
      onToggleDoneFromList, 
      onToggleImportantFromList,
      onDeleted,
      done, 
      important 
    } = this.props;
    let classNames = "todo-list-item";

    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={ classNames }>
        <span 
          className="todo-list-item-label"
          onClick={onToggleDoneFromList}>
          {label}
        </span>
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportantFromList}>
          <i className="fa fa-exclamation" />
        </button>
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}