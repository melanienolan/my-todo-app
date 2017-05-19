import React, { Component } from 'react';
import uuid from 'uuid';
import Title from './Components/Title';
import Todos from './Components/Todos';
import Input from './Components/Input';
// import db from './mockDB';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      value: '',
      isLoading: true
    };
  }
  getTodos() {
    if (localStorage.todos) {
      let storage = JSON.parse(Object.values(localStorage));
      this.setState({
        todos: storage,
        isLoading: false
      });
    } else {
      this.setState({
        isLoading: false
      });
    }
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
    if (value.trim().length === 0) {
      this.setState({
        value: ''
      });
    } else {
      let newTodo = {
        id: uuid.v4(),
        title: value,
        completed: false
      };
      todos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(todos));
      this.setState({
        todos,
        value: ''
      });
    }
  }
  completedTodo(completedTodo) {
    let { todos } = this.state;
    let index = todos.findIndex(todo => todo.id === completedTodo.id);
    todos[index].completed = true;
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({
      todos
    });
  }
  deletedTodo(deletedTodo) {
    let { todos } = this.state;
    let index = todos.findIndex(todo => todo.id === deletedTodo.id);
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    this.setState({
      todos
    });
  }
  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
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

export default App;
