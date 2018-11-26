import React from 'react';
import './header.css';

const Header = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List for you</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  );
}

export default Header;