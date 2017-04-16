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
      todos: [],
      newTodo: {}
    };
  }
  getTodos() {
    this.setState({
      todos: [
        {
          id: 1,
          title: 'delectus aut autem',
          completed: true
        },
        {
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false
        },
        {
          id: 3,
          title: 'fugiat veniam minus',
          completed: false
        },
        {
          id: 4,
          title: 'et porro tempora',
          completed: true
        },
        {
          id: 5,
          title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
          completed: false
        },
        {
          id: 6,
          title: 'qui ullam ratione quibusdam voluptatem quia omnis',
          completed: false
        },
        {
          id: 7,
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
    this.setState(
      {
        newTodo: {
          userId: 1,
          id: value,
          title: value,
          completed: false
        }
      },
      function() {
        let todos = this.state.todos;
        let newTodo = this.state.newTodo;
        todos.push(newTodo);
        this.setState({
          todos: todos,
          newTodo: {}
        });
      }
    );
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
