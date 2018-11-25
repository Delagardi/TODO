import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Search from './components/search';
import TodoList from './components/todoList';

const App = () => {
  return (
    <div>
      <Header/>
      <Search/>
      <TodoList/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));