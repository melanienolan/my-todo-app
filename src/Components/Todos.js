import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import TodoItem from './TodoItem'; // eslint-disable-line no-unused-vars

class Todos extends Component {
  completeTodo(todo) {
    this.props.onCompleted(todo);
  }
  deleteTodo(todo) {
    this.props.onDeleted(todo);
  }
  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            onCompleted={() => this.completeTodo(todo)}
            onDeleted={() => this.deleteTodo(todo)}
          />
        );
      });
    }
    return (
      <div>
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array
};

export default Todos;
