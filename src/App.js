import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import Title from './Components/Title'; // eslint-disable-line no-unused-vars
import Todos from './Components/Todos'; // eslint-disable-line no-unused-vars
import Input from './Components/Input'; // eslint-disable-line no-unused-vars
import uuid from 'uuid';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
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
  addTodo(value) {
    let todos = this.state.todos;
    let newTodo = {
      id: uuid.v4(),
      title: value,
      completed: false
    };
    todos.push(newTodo);
    this.setState({
      todos: todos
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
          onAddTodoSubmit={value => {
            this.addTodo(value);
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
