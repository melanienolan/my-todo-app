import React from 'react';
import TodoItem from '../Components/TodoItem';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const completeTodo = {
  completed: true,
  id: 'e41fac97-3d2d-457a-9990-479f016ad0ce',
  title: 'complete todo'
};

const incompleteTodo = {
  completed: false,
  id: 'e41fac97-3d2d-457a-9990-479f016ad0ce',
  title: 'incomplete todo'
};

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
