/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { compose, withState, lifecycle } from 'recompose';
import uuid from 'uuid';
import Title from './Components/Title';
import Todos from './Components/Todos';
import Input from './Components/Input';
import db from './mockDB';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }
  updateInput(value) {
    this.setState({
      value
    });
  }
  addTodo() {
    let { value } = this.state;
    let { todos } = this.props;
    let newTodo = {
      id: uuid.v4(),
      title: value,
      completed: false
    };
    todos.push(newTodo);
    this.setState({
      value: ''
    });
    this.props.updateTodos(todos);
  }
  completedTodo(completedTodo) {
    let { todos } = this.props;
    let index = todos.findIndex(todo => todo.id === completedTodo.id);
    todos[index].completed = true;
    this.props.updateTodos(todos);
  }
  deletedTodo(deletedTodo) {
    let { todos } = this.props;
    let index = todos.findIndex(todo => todo.id === deletedTodo.id);
    todos.splice(index, 1);
    this.props.updateTodos(todos);
  }
  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <Title todos={this.props.todos} />
          <Input
            inputValue={this.state.value}
            onUpdate={value => this.updateInput(value)}
            onAddTodoSubmit={() => {
              this.addTodo(this.state.value);
            }}
          />
          <Todos
            todos={this.props.todos}
            onCompleted={todo => this.completedTodo(todo)}
            onDeleted={todo => this.deletedTodo(todo)}
          />
        </div>
      );
    }
  }
}

export default compose(
  withState('isLoading', 'updateIsLoading', true),
  withState('todos', 'updateTodos', []),
  lifecycle({
    componentWillMount() {
      db.getToDos().then(todos => {
        const { updateTodos, updateIsLoading } = this.props;
        updateTodos(todos);
        updateIsLoading(false);
      });
    }
  })
)(App);
