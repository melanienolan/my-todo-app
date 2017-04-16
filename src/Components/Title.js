import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    let completed;
    let total;
    if (this.props.todos) {
      total = this.props.todos.length;
      completed = this.props.todos.filter(todo => todo.completed).length;
    }
    return (
      <div className="Title">
        <h1>My Todos</h1>
        <p>{completed} / {total}</p>
      </div>
    );
  }
}

Title.propTypes = {
  todos: PropTypes.array
};

export default Title;
