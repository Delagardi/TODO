import React, { Component } from 'react';
import Header from '../header';
import Search from '../search';
import TodoList from '../todoList';
import ItemStatusFilter from '../itemStatusFilter';
import './app.css';

class  App extends Component {
  constructor() {
    super();

    this.state = {
      listData: [
        {label: 'Drink tea', important: false, id: 1},
        {label: 'Eat breakfast', important: false, id: 2},
        {label: 'Build my own application', important: true, id: 3},
        {label: 'Drink some Burn', important: false, id: 4}
      ]
    }

    this.onDeletedItem = (id) => {
      this.setState(({ listData }) => {
        const index = listData.findIndex((el) => id === el.id);
        
        const newListData = [
          ...listData.slice(0, index), 
          ...listData.slice(index+1)
        ];

        return {
          listData: newListData
        }
      });
    }
  }
  render() {
    const { listData } = this.state;

    return (
      <div className='todo-app'>
        <Header toDo={3} done={0} />
        <div>
          <Search/>
          <ItemStatusFilter/>
        </div>
        <TodoList 
          todos={ listData }
          onDeletedFromApp={this.onDeletedItem}/>
      </div>
    );
  }
}

export default App;