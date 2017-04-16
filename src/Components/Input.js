import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

class Input extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }
  onInputChange(value) {
    this.setState({
      value: value
    });
  }
  onAddTodo(value) {
    this.props.onAddTodoSubmit(value);
    this.setState({
      value: ''
    });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <p>{this.state.value}</p>
        <button onClick={() => this.onAddTodo(this.state.value)}>
          Add todo
        </button>
      </div>
    );
  }
}

Input.propTypes = {
  todo: PropTypes.object,
  onAddTodoSubmit: PropTypes.func
};

export default Input;
