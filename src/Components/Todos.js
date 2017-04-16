import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import TodoItem from './TodoItem'; // eslint-disable-line no-unused-vars

class Todos extends Component {
  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return <TodoItem todo={todo} key={todo.id} />;
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
