import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';

class TodoItem extends Component {
  completeTodo(todo) {
    this.props.onCompleted(todo);
  }
  deleteTodo(todo) {
    this.props.onDeleted(todo);
  }
  render() {
    let todoClass = this.props.todo.completed ? 'done' : 'undone';
    return (
      <div className={todoClass}>
        <p>
          {this.props.todo.title}
        </p>
        <button
          className="completed"
          onClick={() => this.completeTodo(this.props.todo)}
        >
          Completed
        </button>
        <button onClick={() => this.deleteTodo(this.props.todo)}>X</button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object
};

export default TodoItem;
