import React, { Component } from 'react';
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
    });
  }
  componentWillMount() {
    this.getTodos();
  }
  updateInput(value) {
    this.setState({
      value: value
    });
  }
  addTodo(value) {
    let todos = this.state.todos;
    let newTodo = {
      id: uuid.v4(),
      title: value,
      completed: false
    };
    todos.push(newTodo);
    this.setState({
      todos: todos,
      value: ''
    });
  }
  completedTodo(completedTodo) {
    let todos = this.state.todos;
    let index = todos.findIndex(todo => todo.id === completedTodo.id);
    todos[index].completed = true;
    this.setState({
      todos: todos
    });
  }
  deletedTodo(deletedTodo) {
    let todos = this.state.todos;
    let index = todos.findIndex(todo => todo.id === deletedTodo.id);
    todos.splice(index, 1);
    this.setState({
      todos: todos
    });
  }
  render() {
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

export default App;
