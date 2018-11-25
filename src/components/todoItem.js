import React from 'react';

//TODO something

const TodoItem = ( { label, important = false }) => {
  const styleItem = {
    color: important ? 'tomato' : 'black'
  }
  return <span style={styleItem}>{label}</span>
}

export default TodoItem;