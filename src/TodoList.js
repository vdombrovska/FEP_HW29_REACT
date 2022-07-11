import React, { Component } from 'react';
export default class TodoList extends Component() {
    render() {
        <ul>
            {this.props.list.map ((todo) => (
            <li class='task-item' key={todo.id} onTodoItemClick={()=>this.props.onToggle(todo.id)}>
                {todo.task} 
                <button onDltBtnClick={()=>this.props.onDelete(todo.id)} class='btn-delete'>X</button>
            </li>))}
        </ul>
    }
}