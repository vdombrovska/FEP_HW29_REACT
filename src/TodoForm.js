import React, { Component } from 'react';
export default class TodoForm extends Component() {
    state = {
        name: '',
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    name="name"
                    value={this.state.name}
                />
                <button>Save</button>
            </form>
        );
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            task: this.state.task,
        };

        this.props.onSave(newTodo);
    };

}