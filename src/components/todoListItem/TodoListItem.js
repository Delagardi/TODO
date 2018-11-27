import React, { Component } from 'react';
import './todoListItem.css';

export default class TodoListItem extends Component {
  constructor() {
    super();
    this.state = {
      done: false,
      important: false
    }

    // this.onLabelClick = () => {
    //   this.setState(({ done }) => {
    //     return {
    //       done: !done
    //     }
    //   });
    // };
  }

  render() {
    const { label, onToggleDoneFromList, onToggleImportantFromList } = this.props;
    const { done, important } = this.state;
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
          onClick={ this.onLabelClick }>
          {label}
        </span>
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportantFromList}>
          <i className="fa fa-exclamation" />
        </button>
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onToggleDoneFromList}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}