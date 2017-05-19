import React from 'react';
import PropTypes from 'prop-types';
import Plus from 'react-icons/lib/fa/plus';

const Input = props => {
  return (
    <div className="add-todo">
      <input
        className="add-todo__input"
        type="text"
        value={props.inputValue}
        onChange={event => props.onUpdate(event.target.value)}
        onKeyUp={event =>
          (event.keyCode === 13 ? props.onAddTodoSubmit() : false)}
      />
      <button
        className="add-todo__button"
        onClick={() => props.onAddTodoSubmit()}
      >
        <Plus />
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
