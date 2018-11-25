import React from 'react';
import TodoItem from './todoItem';

const TodoList = () => {
  return (
    <ul>
      <li><TodoItem label='Drink tea' /></li>
      <li><TodoItem label='Build my own app' important/></li>
      <li><TodoItem label='Dream'/></li>
    </ul>
  );
}

export default TodoList;