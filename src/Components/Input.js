import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  return (
    <div>
      <input
        type="text"
        value={props.inputValue}
        onChange={event => props.onUpdate(event.target.value)}
      />
      <p>{props.inputValue}</p>
      <button onClick={() => props.onAddTodoSubmit()}>
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
