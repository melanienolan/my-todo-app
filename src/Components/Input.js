import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

class Input extends Component {
  onInputChange(value) {
    this.props.onUpdate(value);
  }
  onAddTodo(value) {
    this.props.onAddTodoSubmit(value);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.inputValue}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <p>{this.props.inputValue}</p>
        <button onClick={() => this.onAddTodo(this.props.inputValue)}>
          Add todo
        </button>
      </div>
    );
  }
}

Input.propTypes = {
  todo: PropTypes.object,
  inputValue: PropTypes.string,
  onAddTodoSubmit: PropTypes.func,
  onUpdate: PropTypes.func
};

export default Input;
