import React from 'react';
import './todoListItem.css';
//TODO something

const TodoListItem = ( { label, important = false }) => {
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

export default TodoListItem;