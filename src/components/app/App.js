import React from 'react';
import Header from '../header';
import Search from '../search';
import TodoList from '../todoList';
import ItemStatusFilter from '../itemStatusFilter';
import './app.css';

const listData = [
  {label: 'Drink tea', important: false, id: 1},
  {label: 'Eat breakfast', important: false, id: 2},
  {label: 'Build my own application', important: true, id: 3},
  {label: 'Drink some Burn', important: false, id: 4}
]

const App = () => {
  return (
    <div className='todo-app'>
      <Header toDo={3} done={0} />
      <div>
        <Search/>
        <ItemStatusFilter/>
      </div>
      <TodoList todos={ listData }/>
    </div>
  );
}

export default App;