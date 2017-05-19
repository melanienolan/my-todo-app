import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

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
    <CSSTransitionGroup
      transitionName="grow"
      transitionEnterTimeout={200}
      transitionLeaveTimeout={200}
      className="todo-list"
    >
      {todoItems}
    </CSSTransitionGroup>
  );
};

Todos.propTypes = {
  todos: PropTypes.array,
  onCompleted: PropTypes.func,
  onDeleted: PropTypes.func
};

export default Todos;
