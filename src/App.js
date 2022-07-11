import React, { Component } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        task: 'Create todo list',
        isDone: false,
      },
      {
        id: 2,
        task: 'Update todo list',
        isDone: false,
      },
      {
        id: 3,
        task: 'follow todo list',
        isDone: false,
      },
    ]
    }
  
    static ITEM_CLASS ='.task-item';
    static DLT_BTN_CLASS = 'btn-delete';

  render () {
    return (
      <>
      <TodoList  list={this.state.list} onDelete={this.deleteTodo} onToggle={this.toggleTodo}/>
      <TodoForm  onSave={this.createTodo}/>
      </>
    )
  };

  createTodo = (newTodo) => {
      this.setState({
       list: [...this.state.list,{...newTodo,id: Date.now()}],
      });
  };

  deleteTodo = (id) => {
    this.setState ({
        list: this.state.list.filter((todo) => todo.id !== id)
          });
  };

  toggleTodo = (todo) => {
    this.setState(prevState => ({isDone: !prevState.isDone}));
    //this.setState ({isDone: !isDone});
    //console.log ('on')
  };


}

