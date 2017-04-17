import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const Todos = props => {
  let todoItems;
  if (props.todos) {
    todoItems = props.todos.map(todo => {
      return (
        <TodoItem
          todo={todo}
          key={todo.id}
          onCompleted={() => props.onCompleted(todo)}
          onDeleted={() => props.onDeleted(todo)}
        />
      );
    });
  }
  return (
    <div>
      {todoItems}
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array,
  onCompleted: PropTypes.func,
  onDeleted: PropTypes.func
};

export default Todos;
