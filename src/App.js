import React, { Component } from 'react';
import Title from './Components/Title';
import Todos from './Components/Todos';
import Input from './Components/Input';
import uuid from 'uuid';
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
    this.setState({
      todos: [
        {
          id: uuid.v4(),
          title: 'delectus aut autem',
          completed: true
        },
        {
          id: uuid.v4(),
          title: 'quis ut nam facilis et officia qui',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'fugiat veniam minus',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'et porro tempora',
          completed: true
        },
        {
          id: uuid.v4(),
          title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'qui ullam ratione quibusdam voluptatem quia omnis',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'illo expedita consequatur quia in',
          completed: false
        }
      ]
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
