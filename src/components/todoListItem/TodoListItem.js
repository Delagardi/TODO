import React, { Component } from 'react';
import './todoListItem.css';
//TODO something

export default class TodoListItem extends Component {
  constructor() {
    super();
    this.state = {
      done: false,
      important: false
    }

    this.onLabelClick = () => {
      this.setState({
        done: true
      });
    };

    this.onMarkImportant = () => {
      this.setState({
        important: true
      });
    };
  }

  render() {
    const { label } = this.props;
    const { done, important } = this.state;
    let classNames = "todo-list-item";

    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }
    
    // const styleItem = {
    //   color: important ? 'steelblue' : 'black',
    //   fontWeight: important ? 'bold' : 'normal'
    // }

    return (
      <span className={ classNames }>
        <span 
          className="todo-list-item-label"
          onClick={ this.onLabelClick }>
          {label}
        </span>
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>
      </span>
    );
  }
}