import React from 'react';
import PropTypes from 'prop-types';
import Check from 'react-icons/lib/fa/check';
import Close from 'react-icons/lib/fa/close';

import CircleThin from 'react-icons/lib/fa/circle-thin';

const TodoItem = props => {
  return (
    <div className="todo-list__item">
      <button
        className="todo-list__button--completed"
        onClick={() => props.onCompleted(props.todo)}
      >
        {props.todo.completed ? <Check /> : <CircleThin />}
      </button>
      <p className="todo-list__text">
        {props.todo.title}
      </p>
      <button
        className="todo-list__button--delete"
        onClick={() => props.onDeleted(props.todo)}
      >
        <Close />
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  onCompleted: PropTypes.func,
  onDeleted: PropTypes.func
};

export default TodoItem;
