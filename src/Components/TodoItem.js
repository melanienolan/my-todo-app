import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = props => {
  let todoClass = props.todo.completed ? 'done' : 'undone';
  return (
    <div className={todoClass}>
      <p>
        {props.todo.title}
      </p>
      <button
        className="completed"
        onClick={() => props.onCompleted(props.todo)}
      >
        Completed
      </button>
      <button onClick={() => props.onDeleted(props.todo)}>X</button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  onCompleted: PropTypes.func,
  onDeleted: PropTypes.func
};

export default TodoItem;
