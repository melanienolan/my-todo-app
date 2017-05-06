import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const inputStyles = {
    display: 'flex',
    justifyContent: 'center'
  };
  const addTodoButtonStyles = {
    height: '40px'
  };
  return (
    <div style={inputStyles}>
      <input
        type="text"
        value={props.inputValue}
        onChange={event => props.onUpdate(event.target.value)}
        onKeyUp={event =>
          (event.keyCode === 13 ? props.onAddTodoSubmit() : false)}
      />
      <button
        style={addTodoButtonStyles}
        onClick={() => props.onAddTodoSubmit()}
      >
        Add todo
      </button>
    </div>
  );
};

Input.propTypes = {
  inputValue: PropTypes.string,
  onAddTodoSubmit: PropTypes.func,
  onUpdate: PropTypes.func
};

export default Input;
