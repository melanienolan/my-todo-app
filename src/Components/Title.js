import React from 'react';
import PropTypes from 'prop-types';

const Title = props => {
  let completed;
  let total;
  if (props.todos) {
    total = props.todos.length;
    completed = props.todos.filter(todo => todo.completed).length;
  }
  return (
    <div className="Title">
      <h1>My Todos</h1>
      <p>{completed} / {total}</p>
    </div>
  );
};

Title.propTypes = {
  todos: PropTypes.array
};

export default Title;
