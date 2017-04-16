import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    let todoClass = this.props.todo.completed ? 'done' : 'undone';
    return (
      <div className={todoClass}>
        <p>
          {this.props.todo.title}
        </p>
        <button>X</button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object
};

export default TodoItem;