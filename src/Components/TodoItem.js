import React from 'react';
import PropTypes from 'prop-types';
import Check from 'react-icons/lib/fa/check';
import Close from 'react-icons/lib/fa/close';
import SquareO from 'react-icons/lib/fa/square-o';
import CheckSquareO from 'react-icons/lib/fa/check-square-o';

const TodoItem = props => {
  // function todoItemDone() {
  //   todoItemStyles.backgroundColor = '#9ed1c7';
  //   completedStyles.display = 'none';
  // }
  // function todoItemNotDone() {
  //   todoItemStyles.backgroundColor = '#d19ea8';
  // }
  let completedClass = props.todo.completed ? 'completed' : 'notcompleted';
  return (
    <div className="todo-list__item">
      <button
        className="todo-list__button--completed"
        onClick={() => props.onCompleted(props.todo)}
      >
        {props.todo.completed ? <CheckSquareO /> : <SquareO />}
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
