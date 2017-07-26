import React from 'react';
import TodoItem from '../Components/TodoItem';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { todos } from '../mocks/todos';

const completeTodo = todos[0];
const incompleteTodo = todos[1];

it('renders complete todo without crashing', () => {
  shallow(<TodoItem todo={completeTodo} />);
});

it('renders incomplete todo without crashing', () => {
  shallow(<TodoItem todo={incompleteTodo} />);
});

it('renders complete todo item', () => {
  const todoItemComponent = shallow(<TodoItem todo={completeTodo} />);
  expect(toJson(todoItemComponent)).toMatchSnapshot();
});

it('renders incomplete todo item', () => {
  const todoItemComponent = shallow(<TodoItem todo={incompleteTodo} />);
  expect(toJson(todoItemComponent)).toMatchSnapshot();
});
