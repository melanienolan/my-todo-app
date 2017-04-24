import React from 'react';
import PropTypes from 'prop-types';
import Check from 'react-icons/lib/fa/check';
import Close from 'react-icons/lib/fa/close';

const TodoItem = props => {
  const todoItemStyles = {
    backgroundColor: 'pink',
    width: '400px',
    margin: '10px auto',
    borderRadius: '5px',
    display: 'flex'
  };
  const pStyles = {
    width: '300px',
    padding: '10px',
    color: 'white'
  };
  const buttonContainerStyles = {
    width: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  const buttonStyles = {
    color: '#9e9e9e',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#ffffff',
    margin: '2px',
    width: '40px',
    height: '40px'
  };
  const completedStyles = {
    color: '#9e9e9e',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#ffffff',
    margin: '2px',
    width: '40px',
    height: '40px'
  };
  function todoItemDone() {
    todoItemStyles.backgroundColor = '#9ed1c7';
    completedStyles.display = 'none';
  }
  function todoItemNotDone() {
    todoItemStyles.backgroundColor = '#d19ea8';
  }
  props.todo.completed ? todoItemDone() : todoItemNotDone();
  return (
    <div style={todoItemStyles}>
      <p style={pStyles}>
        {props.todo.title}
      </p>
      <div style={buttonContainerStyles}>
        <button
          style={completedStyles}
          onClick={() => props.onCompleted(props.todo)}
        >
          <Check />
        </button>
        <button
          style={buttonStyles}
          onClick={() => props.onDeleted(props.todo)}
        >
          <Close />
        </button>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  onCompleted: PropTypes.func,
  onDeleted: PropTypes.func
};

export default TodoItem;
