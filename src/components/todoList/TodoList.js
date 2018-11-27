import React from 'react';
import TodoListItem from '../todoListItem';
import './todoList.css'

const TodoList = ({
    todos, 
    onDeletedFromApp, 
    onToggleImportant,
    onToggleDone
  }) => {
  const elements = todos.map((item) => {
    const {id, ...itemPropsWithOfId} = item;

    return ( 
      <li key={id} className='list-group-item'>
        <TodoListItem {...itemPropsWithOfId}
        onDeleted={ () => onDeletedFromApp(id) }
        onToggleImportantFromList={ () => onToggleImportant(id) }
        onToggleDoneFromList={ () => onToggleDone(id) }
        />
      </li>
    );
  });

  return (
    <ul className='list-group todo-list'>
      { elements }
    </ul>
  );
}

export default TodoList;