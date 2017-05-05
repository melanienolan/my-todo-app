/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { compose, withState } from 'recompose';
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
      todos: [],
      value: ''
    };
  }
  getTodos() {
    db.getToDos().then(todos => {
      this.setState({
        todos
      });
      this.props.updateIsLoading(false);
    });
  }
  componentWillMount() {
    this.getTodos();
  }
  updateInput(value) {
    this.setState({
      value
    });
  }
  addTodo() {
    let { todos, value } = this.state;
    let newTodo = {
      id: uuid.v4(),
      title: value,
      completed: false
    };
    todos.push(newTodo);
    this.setState({
      todos,
      value: ''
    });
  }
  completedTodo(completedTodo) {
    let { todos } = this.state;
    let index = todos.findIndex(todo => todo.id === completedTodo.id);
    todos[index].completed = true;
    this.setState({
      todos
    });
  }
  deletedTodo(deletedTodo) {
    let { todos } = this.state;
    let index = todos.findIndex(todo => todo.id === deletedTodo.id);
    todos.splice(index, 1);
    this.setState({
      todos
    });
  }
  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <Title todos={this.state.todos} />
          <Input
            inputValue={this.state.value}
            onUpdate={value => this.updateInput(value)}
            onAddTodoSubmit={() => {
              this.addTodo(this.state.value);
            }}
          />
          <Todos
            todos={this.state.todos}
            onCompleted={todo => this.completedTodo(todo)}
            onDeleted={todo => this.deletedTodo(todo)}
          />
        </div>
      );
    }
  }
}

export default compose(withState('isLoading', 'updateIsLoading', true))(App);
