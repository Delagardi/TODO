import React, { Component } from 'react';
import Header from '../header';
import Search from '../search';
import TodoList from '../todoList';
import ItemStatusFilter from '../itemStatusFilter';
import TodoListItemAdd from '../todoListItemAdd';
import './app.css';

export default class  App extends Component {
  constructor() {
    super();

    this.maxId = 100;

    this.createTodoItem = (label) => {
      return {
        label,
        important: false,
        done: false,
        id: this.maxId++
      }
    }

    this.state = {
      listData: [
        this.createTodoItem('Drink tea'),
        this.createTodoItem('Eat breakfast'),
        this.createTodoItem('Build my own application'),
        this.createTodoItem('Drink some Burn')
      ],
      term: ''
    }

    this.onAddedFunc = (text) => {
      const newItem = this.createTodoItem(text);

      this.setState(({ listData }) => {
        const newListData = [
          ...listData, 
          newItem
        ];
        
        return {
          listData: newListData
        }
      })
    }

    this.onDeletedFunc = (id) => {
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

    this.toggleProperty = (arr, id, propName) => {
      const index = arr.findIndex((el) => id === el.id);
      const oldItem = arr[index];
      const newItem = {
        ...oldItem,
        [propName]: !oldItem.propName
      }
      
      return [
        ...arr.slice(0, index),
        newItem, 
        ...arr.slice(index+1)
      ];
    }

    this.onToggleDoneFunc = (id) => {
      this.setState(({ listData }) => {
        return ({
          listData: this.toggleProperty(listData, id, 'done')
        });
      });
    }

    this.onToggleImportantFunc = (id) => {
      this.setState(({ listData }) => {
        return ({
          listData: this.toggleProperty(listData, id, 'important')
        });
      });
    }

    this.searchResults = (items, term) => {
      if (term.length === 0) {
        return items;
      }

      return items.filter( (item) => item.label
                                      .toLowerCase()
                                      .indexOf(term.toLowerCase()) > -1);
    }

    this.onSearchChangeFunc = (term) => {
      this.setState({ term });
    }
  }
  render() {
    const { listData, term } = this.state;
    const doneCount = listData
                        .filter( (el) => el.done === true ).length;
    const todoCount = listData.length - doneCount;
    const showData = this.searchResults(listData, term);


    return (
      <div className='todo-app'>
        <Header toDo={todoCount} done={doneCount} />
        <div>
          <Search
            onSearchChange={this.onSearchChangeFunc}/>
          <ItemStatusFilter
            onWhatClicked={this.onWhatClicked}/>
        </div>
        <TodoList 
          todos={ showData }
          onDeletedFromApp={this.onDeletedFunc}
          onToggleImportant={this.onToggleImportantFunc}
          onToggleDone={this.onToggleDoneFunc}/>
        <TodoListItemAdd
         onAdded={this.onAddedFunc}/>
      </div>
    );
  }
}