import React from 'react';
import Todos from '../Components/Todos';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { todos } from '../mocks/todos';

it('renders todos component without crashing', () => {
  shallow(<Todos todos={todos} />);
});

it('renders todos component with todo items', () => {
  const todosComponent = shallow(<Todos todos={todos} />);
  expect(toJson(todosComponent)).toMatchSnapshot();
});
it('fully renders todos component with todo items', () => {
  const todosComponent = mount(<Todos todos={todos} />);
  expect(toJson(todosComponent)).toMatchSnapshot();
});
